import ResponsiveContainer from "../component/ResponsiveContainer"
import MainLayout from "../layout/MainLayout"

const AllPage = ({ sidebarOpen }) => {
    return (
        <MainLayout title="전체 글">
            <ResponsiveContainer sidebarOpen={sidebarOpen}>
                <h2>전체 글 </h2>
               {/* 이거 회원 전체의 글을 볼 수 있는 공간 */}
            </ResponsiveContainer>
        </MainLayout>
    )
}
export default AllPage;