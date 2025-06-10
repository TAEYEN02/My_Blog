import ResponsiveContainer from "../component/ResponsiveContainer";
import MainLayout from "../layout/MainLayout";

const Profile = ({sidebarOpen}) => {
    return (
     <MainLayout title="프로필 관리">
        <ResponsiveContainer sidebarOpen={sidebarOpen}>
            <p>프로필 관리</p>
        </ResponsiveContainer>
     </MainLayout>
    )
}
export default Profile;