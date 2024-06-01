import { certificateList, srcset } from "@/lib/certList";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";

export default function CertifiaceSection() {
  return (
    <Box className="section-default">
      <Typography variant="h4" fontWeight="bold" className="">
        Certificate Gallery
      </Typography>
      <ImageList cols={3} gap={8} rowHeight="auto">
        {certificateList.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item.img}
              alt={`Image ${index + 1}`}
              layout="responsive"
              objectFit="cover"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
