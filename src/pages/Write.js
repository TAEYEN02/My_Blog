import ResponsiveContainer from "../component/ResponsiveContainer"
import MainLayout from "../layout/MainLayout"

const Write = ({ sidebarOpen }) => {
    return (
        <MainLayout title="글쓰기">
            <ResponsiveContainer sidebarOpen={sidebarOpen}>
                <h2>글쓰는 거 </h2>
                {/* 여기엔 그림 일기장 처럼 사진 불러오고 일기쓰는 란 */}
                {/* 사진 드레그할 수 있는거, 파일도 올릴 수 있고 글쓰기는 글자 제한을 안두고 할 수 있고 */}
            </ResponsiveContainer>
        </MainLayout>
    )
}
export default Write;