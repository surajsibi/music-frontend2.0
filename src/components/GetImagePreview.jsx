import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { FaCamera } from "react-icons/fa";

function GetImagePreview({
    control,
    label,
    defaultValue = "",
    className,
    cameraIcon = false,
    cameraSize = 20,
    image
}) {
    const [preview, setPreview] = useState(null);

    const handlePreview = (e) => {
        const files = e.target.files;
        setPreview(URL.createObjectURL(files[0]));
        return files;
    };
    return (
        <>
            <div className="w-full">
                <label
                    htmlFor="avatar"
                    className="cursor-pointer relative flex flex-row justify-between items-start"
                >
                    {label && (
                        <label className="inline-block mb-1 pl-1">
                            {label}
                        </label>
                    )}
                    {/* <div className="relative flex justify-center items-center"> */}
                    <img
                        src={preview || image}
                        className={className}
                    />
                    {cameraIcon && (
                        <FaCamera
                            size={cameraSize}
                            className="hover:text-purple-500 absolute inline-flex justify-center items-center w-full"
                        />
                    )}
                    {/* </div> */}
                    <Controller
                        name="avatar"
                        control={control}
                        defaultValue={defaultValue || ""}
                        render={({ field: { onChange } }) => (
                            <input
                                id="avatar"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                    onChange(handlePreview(e));
                                }}
                            />
                        )}
                        rules={{ required: `avatar is required` }}
                    />
                </label>
            </div>
        </>
    );
}

export default GetImagePreview;