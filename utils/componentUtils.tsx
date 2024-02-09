// utils/componentUtils.ts
import { createClient } from "@/utils/supabase/server";
import HeaderComponent from "@/app/components/HeaderComponent";
import TextComponent from "@/app/components/TextComponent";

export async function fetchAndMapComponents(pageName: string) {
  const supabase = createClient();
  const { data: components } = await supabase.from(pageName).select();

  console.log(components);

  return (
    <>
      {components &&
        components.map((component) => {
          switch (component.name) {
            case "text":
              return (
                <div key={component.id}>
                  <TextComponent>{component.content}</TextComponent>
                </div>
              );
            case "header":
              return (
                <div key={component.id}>
                  <HeaderComponent>{component.content}</HeaderComponent>
                </div>
              );
            default:
              return null;
          }
        })}
    </>
  );
}
