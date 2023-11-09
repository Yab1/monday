import { Input } from "@material-tailwind/react";

function SearchBar() {
  return (
    <div className="mr-auto md:mr-4 md:w-56">
      <Input color="blue" label="Type here" crossOrigin={undefined} />
    </div>
  );
}

SearchBar.displayName =
  "/src/features/dashboard/layouts/navbar/widgets/SearchBar.tsx";

export default SearchBar;
