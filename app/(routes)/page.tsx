import { getBillboard } from "@/actions/get-billboard";
import { Billboard } from "@/components/ui/billboard";
import { Container } from "@/components/ui/container";

const Home = async () => {
  const billboard = await getBillboard("7720c09a-e2da-4818-bf7b-0be0b728ec13");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default Home;
