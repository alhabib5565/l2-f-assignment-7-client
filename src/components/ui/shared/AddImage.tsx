import { cn } from "@/lib/utils";
import { imageUpload } from "@/utils/imageUpload";
import { Upload } from "lucide-react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type TAddImage = {
  setImageUrl: Dispatch<SetStateAction<string>>;
  imageUrl: string;
};

const AddImage = ({ imageUrl, setImageUrl }: TAddImage) => {
  const [image, setImage] = useState<File | null>();
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };

  useEffect(() => {
    const handleGetImageUrl = async () => {
      if (image) {
        setLoading(true);
        const data = await imageUpload(image);
        console.log(data);
        setImageUrl(data.display_url);
        setImage(null);
        setLoading(false);
      }
    };
    handleGetImageUrl();
  }, [image, setImageUrl]);

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className={cn(
          "rounded-lg flex flex-col items-center justify-center w-full h-[200px] border-2 border-gray-300 border-dashed cursor-pointer bg-gray-100 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
          {
            "opacity-50 cursor-not-allowed": loading,
          }
        )}
      >
        {imageUrl ? (
          <img className="w-full h-full bg-contain" src={imageUrl} alt="" />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
            <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">
              Choose Image,
              <span className="font-semibold"> Click to upload</span>
            </p>
          </div>
        )}
        <input
          onChange={handleImageChange}
          id="dropzone-file"
          type="file"
          className="hidden"
          disabled={loading}
        />
      </label>
    </div>
  );
};

export default AddImage;
