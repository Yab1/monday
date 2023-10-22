import { InvitationStatusEnum } from "@/enum";

interface Invitation {
  project: string;
  sender: string;
  recipient: string;
  timestamp: string;
  status: InvitationStatusEnum;
}

export default Invitation;
