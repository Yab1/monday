import { Typography, Switch } from "@material-tailwind/react";
import { settingLabel } from "@/dictionaries";
import { useAppDispatch, useAppSelector } from "@/hooks";

function Settings() {
  const user = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Platform Settings
      </Typography>
      <div className="flex flex-col gap-6">
        <Typography className="block text-xs font-semibold uppercase text-blue-gray-500">
          Account
        </Typography>
        <div className="flex flex-col gap-6">
          <Switch
            color="blue"
            crossOrigin={undefined}
            id={settingLabel.acceptsInvite}
            label={settingLabel.acceptsInvite}
            defaultChecked={user.settings.inviteAcceptanceNotifications}
            labelProps={{
              className: "text-sm font-normal text-blue-gray-500",
            }}
          />
          <Switch
            color="blue"
            crossOrigin={undefined}
            id={settingLabel.sendsInvite}
            label={settingLabel.sendsInvite}
            defaultChecked={user.settings.inviteAcceptanceNotifications}
            labelProps={{
              className: "text-sm font-normal text-blue-gray-500",
            }}
          />
          <Switch
            color="blue"
            crossOrigin={undefined}
            id={settingLabel.mentions}
            label={settingLabel.mentions}
            defaultChecked={user.settings.mentionNotifications}
            labelProps={{
              className: "text-sm font-normal text-blue-gray-500",
            }}
          />
        </div>
      </div>
    </div>
  );
}

Settings.displayName = "/src/features/profile/widgets/Settings.tsx";

export default Settings;
