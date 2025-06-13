import MainLayout from "../layout/MainLayout";
import ResponsiveContainer from "../component/ResponsiveContainer";

const MainPage = ({ sidebarOpen }) => {
  return (
    <MainLayout title="게시판">
      <ResponsiveContainer
        sidebarOpen={sidebarOpen}
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* 상단 */}
        <div style={{ display: 'flex', gap: 20, flexGrow: 1, minHeight: 300, width: '100%'  }}>
          {/* 왼쪽 TODO */}
          <div
            style={{
              flex: 1,
              minWidth: 0, // 줄어들게 해주는 키포인트
              border: '1px solid #ccc',
              padding: 16,
            }}
          >
            <h3>TODO</h3>
            {/* 백엔드로 날짜마다 todoList 설정할 수 있고 이게 하단의 달력과 연결되어있어서 날짜에 맞는
            todoList가 되어있어야함 */}
            {/* 삭제, 추가, 체크할 수 있는 체크박스 */}
          </div>

          {/* 전체 글 */}
          <div
            style={{
              flex: 2,
              minWidth: 0, // 줄어들게
              border: '1px solid #ccc',
              padding: 16,
            }}
          >
            <h3>전체 글</h3>
            {/* 카드 형식으로 넘겨볼 수 있는 전체 글 */}
          </div>

          {/* 오른쪽 스크랩 + 달력 */}
          <div
            style={{
              flex: 1.5,
              minWidth: 0,   // 꼭 필요
              display: "flex",
              flexDirection: "column",
              gap: 20,
              overflow: "hidden",  // 부모에서 넘침 방지
            }}
          >
            <div style={{ flex: 1, border: "1px solid #ccc", padding: 16, minWidth: 0 }}>
              <h3>스크랩한 글</h3>
              {/* 좋아요 한 글을 카드형식으로 (오른쪽 왼쪽으로 볼 수 있는거 ) => 이것도 백엔드로 내가 좋아요 한 파일들을
              저장해서 보여주는거 => 보여주는 내용은 간단한 내용이고 그 카드를 누르면 상세보기로 이제 다른 스크린으로 넘어가는게 아니라 팝업창으로
              보여줄 수 있는거 (아닌가 이게 다른 화면으로 넘어가는게 좋을려나) */}
            </div>
            <div
              style={{
                width: "100%",  // 부모너비 꽉 채우기
                height: 200,
                border: "1px solid #ccc",
                padding: 16,
                backgroundColor: "#f9f9f9",
                boxSizing: "border-box", // padding 포함 너비계산
                minWidth: 0, // 줄어들게 해줌
              }}
            >
              <h3 style={{ textAlign: "center" }}>달력</h3>
              {/* Todo랑 연동되어 이게 날짜를 눌렀을때 Todo칸에 그 날짜의 list 화면들을 보여줄 수 있고, 
              Todo가 되어있는 날엔 표시가 뜰 수 있게, 그리고 내가 기념일같은것도 간단하게 넣을 수 있도록 할 수 있음 좋겠다. */}
            </div>
          </div>
        </div>

        {/* 아래 인기글 Top 5 3개 섹션 */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 40,
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* 인기글 섹션들 */}
        </div>
      </ResponsiveContainer>
    </MainLayout>
  );
};

export default MainPage;
