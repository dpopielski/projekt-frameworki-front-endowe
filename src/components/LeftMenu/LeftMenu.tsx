import styled from "styled-components";

// const LeftMenuContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: #f4f4f4;
//   padding: 20px;
// `;

// const Card = styled.div`
//   height: 200px;
//   width: 100%;
//   padding: 10px;
//   background-color: #ffffff;
// `


export const LeftMenu = () => {
  return (
    <aside className="w-full p-4">
      {/* <div className="flex justify-start align-center mb-6">
        <img className="w-7 mr-5" src={process.env.PUBLIC_URL + "/assets/icons/publications.svg"} alt=""/>
        <p>Publications</p>
      </div>
      <div className="flex justify-start align-center mb-6">
        <img className="w-7 mr-5" src={process.env.PUBLIC_URL + "/assets/icons/ecosystem.svg"} alt=""/>
        <p>Ecosystem</p>
      </div>
      <div className="flex justify-start align-center mb-6">
        <img className="w-7 mr-5" src={process.env.PUBLIC_URL + "/assets/icons/entities2.svg"} alt=""/>
        <p>Entities</p>
      </div> */}
    </aside>
  );
};

export default LeftMenu;