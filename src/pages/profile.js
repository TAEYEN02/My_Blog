import ResponsiveContainer from "../component/ResponsiveContainer";
import MainLayout from "../layout/MainLayout";

const Profile = ({sidebarOpen}) => {
    return (
     <MainLayout title="프로필 관리">
        <ResponsiveContainer sidebarOpen={sidebarOpen}>
            <p>프로필 관리</p>
            {/* 비밀번호 변경, 아이디 변경, 개인 프로필 사진변경 */}
        </ResponsiveContainer>
     </MainLayout>
    )
}
export default Profile;