import { NomalCssButton } from "./compornents/atoms/button/NomalCssButton";
import { PrimaryButton } from "./compornents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compornents/atoms/button/SecondaryButton";
import { SearchInput } from "./compornents/molecules/SearchInput";
import { UserCard } from "./compornents/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "じゃけぇ",
  image: "https://sorce.unsplash.com/NE0XGVKTmcA",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "http://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <NomalCssButton>Nomal</NomalCssButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
      <br />
    </div>
  );
}
