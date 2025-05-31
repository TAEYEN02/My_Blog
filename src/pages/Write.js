import ResponsiveContainer from "../component/ResponsiveContainer"
import MainLayout from "../layout/MainLayout"

const Write = ({ sidebarOpen }) => {
    return (
        <MainLayout title="내가 쓴 글">
            <ResponsiveContainer sidebarOpen={sidebarOpen}>
                <h2>글쓰는 거 </h2>
                {/* 여기엔 그림 일기장 처럼 사진 불러오고 일기쓰는 란 */}
            </ResponsiveContainer>
        </MainLayout>
    )
}
export default Write;