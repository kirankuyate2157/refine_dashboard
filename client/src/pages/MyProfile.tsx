import React from "react";

import { useGetIdentity, useOne } from "@pankod/refine-core";

import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  console.log("user :", user);

  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.user_id,
  });
  console.log("data : ", data);

  const myProfile = data?.data ?? [];

  console.log("myProfile  : ", myProfile);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;
