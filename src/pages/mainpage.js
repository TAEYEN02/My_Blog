import React from "react";
import MainLayout from "../layout/MainLayout";
import ResponsiveContainer from "../component/ResponsiveContainer";

const MainPage = ({ sidebarOpen }) => {
  return (
    <MainLayout title="게시판">
      <ResponsiveContainer sidebarOpen={sidebarOpen}>
        <h1>게시판 메인 페이지</h1>

        {/* 상단 그리드: 왼쪽 TODO, 가운데 내가 쓴 글, 오른쪽 스크랩 + 달력 */}
        <div style={{ display: "flex", gap: 20 }}>
          {/* 왼쪽 TODO */}
          <div style={{ flex: 1, minWidth: 200, border: "1px solid #ccc", padding: 16 }}>
            <h3>TODO</h3>
            {/* TODO 내용 */}
          </div>

          {/* 가운데 내가 쓴 글 */}
          <div style={{ flex: 2, minWidth: 300, border: "1px solid #ccc", padding: 16 }}>
            <h3>내가 쓴 글</h3>
            {/* 내가 쓴 글 목록 */}
          </div>

          {/* 오른쪽: 스크랩 + 달력 */}
          <div style={{ flex: 1.5, minWidth: 250, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ flex: 1, border: "1px solid #ccc", padding: 16 }}>
              <h3>스크랩한 글</h3>
              {/* 스크랩한 글 목록 */}
            </div>
            <div
              style={{
                width: 200,
                height: 200,
                border: "1px solid #ccc",
                padding: 16,
                alignSelf: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ textAlign: "center" }}>달력</h3>
              {/* 달력 컴포넌트 자리 */}
            </div>
          </div>
        </div>

        {/* 아래 인기글 Top 5 3개 섹션 */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 40,
            justifyContent: "space-between",
          }}
        >
        </div>
      </ResponsiveContainer>
    </MainLayout>
  );
};

export default MainPage;
