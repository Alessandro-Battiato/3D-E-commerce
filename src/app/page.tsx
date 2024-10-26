import Navbar from "@/components/Navbar";
import Shoe from "@/components/Shoe";
// TO DO: Implement sidebar for smaller devices, and check style guide
export default function Home() {
    return (
        <div className="min-h-screen h-screen font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <main className="flex h-full w-full">
                <Shoe />
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}
