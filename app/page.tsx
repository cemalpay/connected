import { fetchAndMapComponents } from "@/utils/componentUtils";
import ImageComponent from "./components/ImageComponent";
export default async function Index() {
  const pageName = "home";
  const components = await fetchAndMapComponents(pageName);

  return (
    <div>
      <p className="absolute left-0 top-0 text-white">{pageName}</p>
      {components}
    </div>
  );
}
