import { Typography, Switch } from "@material-tailwind/react";
import { accountSettingLabel, applicationSettingLabel } from "@/dictionaries";
import { useAppSelector } from "@/hooks";
import { SettingEnum } from "@/enum";

function Settings() {
  const { user } = useAppSelector((state) => state.auth);

  const settingEnumReverseMapping: Record<string, SettingEnum> = {
    acceptsMyInvite: SettingEnum.ACCEPTS_MY_INVITE,
    sendsMeInvite: SettingEnum.SENDS_ME_INVITE,
    mentionsMe: SettingEnum.MENTIONS_ME,
  };

  return (
    <div>
      <Typography variant="h6" color="blue-gray" className="mb-3">
        Platform Settings
      </Typography>
      <div className="flex flex-col gap-16">
        {Object.entries(user.settings).map(([title, options], index) => (
          <div key={index} className="flex flex-col gap-6">
            <Typography className="block text-xs font-semibold uppercase text-blue-gray-500">
              {title}
            </Typography>
            {Object.entries(options as Object).map(([key, value], index) => {
              const settingKey = settingEnumReverseMapping[key];

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
