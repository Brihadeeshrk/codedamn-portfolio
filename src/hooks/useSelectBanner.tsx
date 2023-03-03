import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { profileState } from "../atoms/userAtom";

const useSelectBannerPic = () => {
  const [selectedBannerPic, setSelectedBannerPic] = useState<string>();

  const onSelectBannerPic = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (event.target.files?.[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setSelectedBannerPic(readerEvent.target.result as string);
      }
    };
  };
  return {
    onSelectBannerPic,
    selectedBannerPic,
    setSelectedBannerPic,
  };
};
export default useSelectBannerPic;
