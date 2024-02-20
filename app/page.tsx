import ImageGallery from "./(components)/ImageGallery";
import ImagePicker from "./(components)/ImagePicker";

export default function Home() {
  return (
    <main className="flex min-h-screen  justify-center p-12">
        <ImagePicker />
        <ImageGallery />
    </main>
  );
}
