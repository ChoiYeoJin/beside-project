import Blank from "@/app/components/Blank";
import Container from "@/app/components/Container";
import Keyboard from "@/app/components/Web/Keyboard";

export default async function KeyList({ params }: { params: { id: string } }) {
  return (
    <Container>
      <Blank height="60px" />
      <div className="flex justify-center">
        <div className="flex gap-6">
          <div></div>
          <div className="w-[588px]">
            <Keyboard keys={[]} />
          </div>

          <div></div>
        </div>
      </div>
    </Container>
  );
}
