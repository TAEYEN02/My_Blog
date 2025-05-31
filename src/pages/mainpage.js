import React from "react";
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
          </div>

          {/* 가운데 내가 쓴 글 */}
          <div
            style={{
              flex: 2,
              minWidth: 0, // 줄어들게
              border: '1px solid #ccc',
              padding: 16,
            }}
          >
            <h3>내가 쓴 글</h3>
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
