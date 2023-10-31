import { InvitationStatusEnum } from "@/enum";

interface IInvitation {
  project: string;
  sender: string;
  recipient: string;
  timestamp: string;
  status: InvitationStatusEnum;
}

export default IInvitation;
