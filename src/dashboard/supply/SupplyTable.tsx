import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/shared/Loader";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DContainer from "@/layout/DContainer";
import {
  useDeleteSupplyMutation,
  useGetAllSupplyQuery,
} from "@/redux/features/supply/supplyApi";
import { TGoodsData } from "@/types/supply.typs";
import { useState } from "react";
import Swal from "sweetalert2";
import UpdateSupply from "./UpdateSupply";
import { useAppSelector } from "@/redux/hooks";
import { cn } from "@/lib/utils";
const SupplyTable = () => {
  const { data: supplies, isLoading } = useGetAllSupplyQuery({});
  const [deleteSupply] = useDeleteSupplyMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const { isDark } = useAppSelector((state) => state.theme);

  if (isLoading) {
    return <Loader />;
  }

  const handleDelete = (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want t delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteSupply(id);
          Swal.fire({
            title: "Deleted!",
            text: "The supply has been deleted.",
            icon: "success",
          });
        }
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
      });
    }
  };

  const handleUpdate = (id: string) => {
    setIsOpen(!isOpen);
    setId(id);
  };

  return (
    <DContainer>
      <Table className="max-w-[800px] mx-auto border my-10 whitespace-nowrap overflow-x-auto">
        <TableCaption>A list of our recent donation items.</TableCaption>
        <TableHeader>
          <TableRow className={cn({ "hover:bg-slate-700": isDark })}>
            <TableHead className="w-[100px]">NO</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {supplies.data.map((supply: TGoodsData, index: number) => (
            <TableRow
              key={supply._id}
              className={cn({ "hover:bg-slate-800": isDark })}
            >
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">{supply.title}</TableCell>
              <TableCell>{supply.category}</TableCell>
              <TableCell className="text-right">{supply.amount}</TableCell>
              <TableCell className="text-right space-x-4">
                <Button
                  onClick={() => handleUpdate(supply._id)}
                  variant="outline"
                  className="text-primary hover:text-white hover:bg-primary border border-primary"
                >
                  Edit
                </Button>
                <Button onClick={() => handleDelete(supply._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
      {isOpen && <UpdateSupply id={id} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </DContainer>
  );
};

export default SupplyTable;
