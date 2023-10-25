import { Fragment } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { Header, Settings, Information } from "./widgets";

const bgLink =
  "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80";

function Profile() {
  return (
    <Fragment>
      <div
        className={`relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-cover	bg-center`}
        style={{ backgroundImage: `url(${bgLink})` }}
      >
        <div className="absolute inset-0 w-full h-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 mb-6 -mt-16 lg:mx-4">
        <CardBody className="p-4">
          <Header />
          <div className="grid gap-12 px-4 mb-12 gird-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <Settings />
            <Information />
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
}

Profile.displayName = "/src/features/profile/Profile.tsx";

export default Profile;
