import Header from "../../components/Header/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { DataProvider } from "./wiki/hooks/useData";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<DataProvider>
			<AntdRegistry>
				<Header />
				<main className="content-wrapper">{children}</main>
			</AntdRegistry>
		</DataProvider>
	);
}
