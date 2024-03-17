import Container from "../components/Container";
import HomeSearchInput from "../components/HomeSearchInput";
import WebHeader from "../components/header/WebHeader";

export default function Home() {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="max-w-[548px] w-full">
          <HomeSearchInput />
        </div>
      </div>
    </Container>
  );
}
