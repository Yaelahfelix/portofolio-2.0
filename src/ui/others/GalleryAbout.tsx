// components/3dGallery.js

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  // Tambahkan lebih banyak gambar sesuai kebutuhan
];

const variants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: (i) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
}

export default function GalleryAbout(){
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="relative w-full h-full overflow-hidden">
          {images.map((src, i) => (
            <motion.div
              className="absolute w-48 h-48 bg-center bg-cover shadow-lg"
              style={{ backgroundImage: `url(${src})`, transformStyle: 'preserve-3d' }}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={variants}
              key={i}
            />
          ))}
        </div>
      </div>
    )
}