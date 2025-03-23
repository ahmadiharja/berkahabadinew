
import React from "react";
import ProfileHeader from "../components/layout/profiles/ProfileHeader";
import ProfileStatistik from "../components/layout/profiles/ProfileStatistik";
import ProfileMenu from "../components/layout/profiles/ProfileMenu";
import ProfileLevel from "../components/layout/profiles/ProfileLevel";
import ProfileReferral from "../components/layout/profiles/ProfileReferral";
import ProfileMemberTeraktif from "../components/layout/profiles/ProfileMemberTeraktif";
import ProfileRiwayatTransaksi from "../components/layout/profiles/ProfileRiwayatTransaksi";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-900 pb-24 pt-14">
      <ProfileHeader />
      <ProfileStatistik />
      <ProfileMenu />
      <ProfileLevel />
      <ProfileReferral />
      <ProfileMemberTeraktif />
      <ProfileRiwayatTransaksi />
    </div>
  );
};

export default Profile;
