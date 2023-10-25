import { Typography, Switch } from "@material-tailwind/react";
import { accountSettingLabel, applicationSettingLabel } from "@/dictionaries";
import { useAppSelector } from "@/hooks";
import { SettingEnum } from "@/enum";

function Settings() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div>
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Platform Settings
      </Typography>
      <div className="flex flex-col gap-16">
        {user.settings.map(({ title, options }, index) => (
          <div key={index} className="flex flex-col gap-6">
            <Typography className="block text-xs font-semibold uppercase text-blue-gray-500">
              {title}
            </Typography>
            {Object.entries(options).map(([key, value], index) => {
              const settingKey = key as SettingEnum;
              return (
                <div key={index} className="flex flex-col gap-6">
                  <Switch
                    color="blue"
                    crossOrigin={undefined}
                    id={
                      title === "account"
                        ? accountSettingLabel[settingKey]
                        : applicationSettingLabel[settingKey]
                    }
                    label={
                      title === "account"
                        ? accountSettingLabel[settingKey]
                        : applicationSettingLabel[settingKey]
                    }
                    defaultChecked={value}
                    labelProps={{
                      className: "text-sm font-normal text-blue-gray-500",
                    }}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

Settings.displayName = "/src/features/profile/widgets/Settings.tsx";

export default Settings;
