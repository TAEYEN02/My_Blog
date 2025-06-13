import ResponsiveContainer from "../component/ResponsiveContainer"
import MainLayout from "../layout/MainLayout"

const PopularPage = ({sidebarOpen}) => {
    return (
        <MainLayout title="인기 글">
            <ResponsiveContainer sidebarOpen={sidebarOpen}>
                <p>인기글</p>
                {/* 이것도 카드형식으로 오른쪽 왼쪽으로 넘겨볼 수 있는 글 */}
                {/* 하트 기능, 공유하기기능, 댓글기능 까지 */}
            </ResponsiveContainer>
        </MainLayout>
    )
}
export default PopularPage;