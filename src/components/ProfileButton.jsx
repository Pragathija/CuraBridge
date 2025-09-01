import { useRef, useState } from 'react';

export default function ProfileButton({ user, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState({
    photo: user?.photo || '',
    name: user?.name || '',
    patientId: user?.patientId || '',
    disease: user?.disease || '',
    contact: user?.contact || '',
    age: user?.age || '',
    dob: user?.dob || '',
  });
  const fileInput = useRef();

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setProfile(p => ({ ...p, photo: ev.target.result }));
      reader.readAsDataURL(file);
    }
  }

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleSave(e) {
    e.preventDefault();
    setEdit(false);
    setOpen(false);
    if (onUpdate) onUpdate(profile);
  }

  function handleCancel() {
    setProfile({
      photo: user?.photo || '',
      name: user?.name || '',
      patientId: user?.patientId || '',
      disease: user?.disease || '',
      contact: user?.contact || '',
      age: user?.age || '',
      dob: user?.dob || '',
    });
    setEdit(false);
  }

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full border-2 border-teal-400 flex items-center justify-center overflow-hidden focus:outline-none"
        onClick={() => setOpen(o => !o)}
        title="Profile"
        type="button"
      >
        {profile.photo ? (
          <img src={profile.photo} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <span className="text-xl font-bold text-teal-600 bg-teal-100 w-full h-full flex items-center justify-center">
            {profile.name?.[0]?.toUpperCase() || (
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4"/>
                <path d="M6 20c0-2.2 3.6-3.5 6-3.5s6 1.3 6 3.5"/>
              </svg>
            )}
          </span>
        )}
      </button>
      
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg p-4 z-50">
          {!edit ? (
            <div>
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full border-2 border-teal-400 overflow-hidden mb-2 relative group">
                  {profile.photo ? (
                    <img src={profile.photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl font-bold text-teal-600 bg-teal-100 w-full h-full flex items-center justify-center">
                      {profile.name?.[0]?.toUpperCase() || '+'}
                    </span>
                  )}
                  {/* Camera icon overlay */}
                  <span className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow group-hover:bg-teal-100">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15.232 5.232l1.536-1.536A2 2 0 0120 5.464V7a2 2 0 01-2 2h-1.464a2 2 0 01-1.536-.768l-1.536-1.536a2 2 0 010-2.828z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </span>
                </div>
                <span className="font-semibold">{profile.name}</span>
              </div>
              <div className="space-y-1 text-sm text-gray-700">
                <div><b>Patient ID:</b> {profile.patientId}</div>
                <div><b>Disease:</b> {profile.disease}</div>
                <div><b>Contact:</b> {profile.contact}</div>
                <div><b>Age:</b> {profile.age}</div>
                <div><b>DOB:</b> {profile.dob}</div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setEdit(true)} className="px-4 py-2 rounded bg-cura-500 hover:bg-cura-600 text-white font-semibold">Edit</button>
                <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded bg-gray-100 text-gray-700">Close</button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSave} className="space-y-3">
              <div className="flex flex-col items-center">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInput}
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInput.current.click()}
                  className="w-20 h-20 rounded-full border-2 border-teal-400 flex items-center justify-center overflow-hidden mb-2 relative group"
                  title="Change Photo"
                >
                  {profile.photo ? (
                    <img src={profile.photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl font-bold text-teal-600 bg-teal-100 w-full h-full flex items-center justify-center">
                      {profile.name?.[0]?.toUpperCase() || '+'}
                    </span>
                  )}
                  {/* Camera icon overlay */}
                  <span className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow group-hover:bg-teal-100">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15.232 5.232l1.536-1.536A2 2 0 0120 5.464V7a2 2 0 01-2 2h-1.464a2 2 0 01-1.536-.768l-1.536-1.536a2 2 0 010-2.828z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </span>
                </button>
                <span className="text-xs text-gray-500">Click to change photo</span>
              </div>
              <input name="name" value={profile.name} onChange={handleChange} placeholder="Name" className="w-full border rounded px-3 py-2" required />
              <input name="patientId" value={profile.patientId} onChange={handleChange} placeholder="Patient ID" className="w-full border rounded px-3 py-2" />
              <input name="disease" value={profile.disease} onChange={handleChange} placeholder="Disease" className="w-full border rounded px-3 py-2" />
              <input name="contact" value={profile.contact} onChange={handleChange} placeholder="Contact Number" className="w-full border rounded px-3 py-2" />
              <input name="age" value={profile.age} onChange={handleChange} placeholder="Age" className="w-full border rounded px-3 py-2" />
              <input name="dob" value={profile.dob} onChange={handleChange} placeholder="Date of Birth" className="w-full border rounded px-3 py-2" />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={handleCancel} className="px-4 py-2 rounded bg-gray-100 text-gray-700">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-cura-500 hover:bg-cura-600 text-white font-semibold">Save</button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}