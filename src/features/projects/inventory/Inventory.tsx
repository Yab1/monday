import { ConfirmationDialog } from "@/widgets";
import Insight from "./insight/Insight";
import Selector from "./selector/Selector";
import Content from "./content/Content";

function Inventory() {
  return (
    <section className="flex flex-col gap-8">
      <Insight />
      <Selector />
      <Content />
      <ConfirmationDialog />
    </section>
  );
}

Inventory.displayName = "/src/features/projects/inventory/Inventory.tsx";

export default Inventory;
