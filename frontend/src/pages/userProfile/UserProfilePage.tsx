import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import api from "@/axios/axios";

type User = {
  id: number;
  email: string;
  name: string;
  nickname: string | null;
  profile_pic: string;
  description: string | null;
  location: string | null;
  date_of_birth: string | null;
};

const UserProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("accounts/me"); // or your endpoint
        setUser(res.data.content.user);
        setFormData(res.data.content.user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (formData) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSave = async () => {
    try {
      const res = await api.put("/api/accounts/me/", formData);
      setUser(res.data.content.user);
      setEditMode(false);
    } catch (err) {
      console.error("Failed to update profile:", err);
    }
  };

  if (!user || !formData) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 rounded-xl bg-white shadow-md">
      <div className="flex gap-6 items-start">
        {/* Profile picture */}
        <div className="min-w-[120px]">
          <img
            src={
              user.profile_pic ||
              "https://avatars.githubusercontent.com/u/583231?v=4"
            }
            alt="Profile"
            className="rounded-full w-28 h-28 object-cover border-2 border-gray-300"
          />
        </div>

        {/* Profile Details */}
        <div className="flex-1">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-semibold">User Profile</h2>
            <Button variant="outline" onClick={() => setEditMode(!editMode)}>
              {editMode ? "Cancel" : "Edit"}
            </Button>
          </div>

          <div className="grid gap-4">
            {/* Name */}
            <div>
              <Label htmlFor="name">Name</Label>
              {editMode ? (
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              ) : (
                <p className="mt-1 text-gray-800">{user.name || "—"}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <p className="mt-1 text-gray-800">{user.email}</p>
            </div>

            {/* Nickname */}
            <div>
              <Label htmlFor="nickname">Nickname</Label>
              {editMode ? (
                <Input
                  id="nickname"
                  name="nickname"
                  value={formData.nickname || ""}
                  onChange={handleChange}
                />
              ) : (
                <p className="mt-1 text-gray-800">{user.nickname || "—"}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Bio</Label>
              {editMode ? (
                <textarea
                  id="description"
                  name="description"
                  className="w-full border rounded p-2"
                  value={formData.description || ""}
                  onChange={handleChange}
                />
              ) : (
                <p className="mt-1 text-gray-800">{user.description || "—"}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="location">Location</Label>
              {editMode ? (
                <Input
                  id="location"
                  name="location"
                  value={formData.location || ""}
                  onChange={handleChange}
                />
              ) : (
                <p className="mt-1 text-gray-800">{user.location || "—"}</p>
              )}
            </div>

            {/* Date of birth */}
            <div>
              <Label htmlFor="date_of_birth">Date of Birth</Label>
              {editMode ? (
                <Input
                  type="date"
                  id="date_of_birth"
                  name="date_of_birth"
                  value={formData.date_of_birth || ""}
                  onChange={handleChange}
                />
              ) : (
                <p className="mt-1 text-gray-800">{user.date_of_birth || "—"}</p>
              )}
            </div>
          </div>

          {editMode && (
            <div className="mt-6">
              <Button className="bg-primary text-white" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
