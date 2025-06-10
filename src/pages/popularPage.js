import ResponsiveContainer from "../component/ResponsiveContainer"
import MainLayout from "../layout/MainLayout"

const PopularPage = ({sidebarOpen}) => {
    return (
        <MainLayout title="인기 글">
            <ResponsiveContainer sidebarOpen={sidebarOpen}>
                <p>인기글</p>
            </ResponsiveContainer>
        </MainLayout>
    )
}
export default PopularPage;