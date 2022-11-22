import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      {/* URLのimagesをsourceに書き換える */}
      <img height={160} width={160} src={user.image} alt="プロフィール" />
      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>xxxxx@aaa.com</dd>
        <dt>TEL</dt>
        <dd>000-1105-88888</dd>
        <dt>会社名</dt>
        <dd>〇〇会社</dd>
        <dt>Web</dt>
        <dd>http://xxxxxxx</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32;
    padding-bottom: 8px;
  }
`;
