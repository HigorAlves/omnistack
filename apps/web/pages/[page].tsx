import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const page = "pages/" + router.query.page || "";

  const PluginComponent = dynamic(() => import(`ui/${page}`), {
    loading: () => <p>Loading...</p>,
  });

  return <PluginComponent />;
}
