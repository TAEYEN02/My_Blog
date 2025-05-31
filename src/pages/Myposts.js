import ResponsiveContainer from "../component/ResponsiveContainer"
import MainLayout from "../layout/MainLayout"

const Myposts = ({ sidebarOpen }) => {
    return (
        <MainLayout title="내가 쓴 글">
            <ResponsiveContainer sidebarOpen={sidebarOpen}>
                <h2>내가 쓴글 list</h2>
                {/* 여기엔 사진들이랑 뭐 일기장이랑 이것저것 다 보이게 할 수 있는거 
            인스타 내 게시물 보이는것처럼럼*/}
            </ResponsiveContainer>
        </MainLayout>
    )

}
export default Myposts;