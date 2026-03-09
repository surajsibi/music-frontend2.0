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

    const hasImage = !!(preview || image);

    return (
        <>
            <div className="w-full">
                <label
                    htmlFor="avatar"
                    className="cursor-pointer flex flex-col items-center gap-2"
                >
                    {label && (
                        <span className="text-sm text-gray-600">
                            {label}
                        </span>
                    )}
                    {hasImage ? (
                        <div className="relative">
                            <img
                                src={preview || image}
                                alt="Avatar"
                                className={className}
                            />
                            {cameraIcon && (
                                <FaCamera
                                    size={cameraSize}
                                    className="hover:text-purple-500 absolute bottom-0 right-0 text-indigo-600"
                                />
                            )}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-1 w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:border-indigo-400 hover:bg-indigo-50/50 transition-colors">
                            {cameraIcon && (
                                <FaCamera size={cameraSize} className="text-gray-400" />
                            )}
                            <span className="text-[10px] text-gray-500">Add photo</span>
                        </div>
                    )}
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
                                    const files = e.target.files;
                                    if (files?.length) {
                                        setPreview(URL.createObjectURL(files[0]));
                                        onChange(files);
                                    } else {
                                        setPreview(null);
                                        onChange(undefined);
                                    }
                                }}
                            />
                        )}
                    />
                </label>
            </div>
        </>
    );
}

export default GetImagePreview;