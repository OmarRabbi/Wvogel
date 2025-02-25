import Emailupdate from "./emailupdate";
import Passwordupdate from "./passwordupdate";
import PersonalInformation from "./personalInformation";

const ProfileInformation = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <PersonalInformation />
        <Emailupdate />
        <Passwordupdate />
      </div>
    </>
  );
};

export default ProfileInformation;
