/* empty css                            */
import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderHead, i as renderSlot, j as renderComponent, m as maybeRenderHead } from '../astro_1Ub4ig7k.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/mnt/nvme0n1p1/projetos/Astro/product-viewer-generator/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Embeded = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Embeded;
  const getProduct = Astro2.url.searchParams.get("product") || '{"product_name":"Nome do produto","product_price":"1000.00","product_tag":"Etiqueta","product_store_logo":"https://placehold.co/150x50/edeef1/b4bac5/webp?text=Logo+da+loja+150+x+50","product_image":"https://placehold.co/200x200/edeef1/b4bac5/webp","product_link":"#"}';
  const product = JSON.parse(getProduct);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product.product_name }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-3 bg-white w-full"> <div class="p-5 border bg-woodsmoke-50 shadow-lg border-woodsmoke-200 rounded-[20px] flex items-center gap-4 relative z-10"> <div class="w-[200px] h-[200px] border border-woodsmoke-200 rounded-[20px] overflow-hidden p-2.5 bg-white"> <img${addAttribute(product.product_image, "src")}${addAttribute(product.product_name, "alt")} id="example_product_image" class="w-full h-full rounded-[15px]"> </div> <div class="flex flex-1 flex-col gap-4 items-start justify-center"> <div class="bg-green-200 text-green-700 px-5 py-2 rounded-[10px]" id="example_product_tag">Etiqueta</div> <h3 class="text-2xl" id="example_product_name">${product.product_name}</h3> <div> <img${addAttribute(product.product_store_logo, "src")} alt="Logo da loja" id="example_product_store_logo" class="max-h-[50px]"> </div> </div> <div class="flex flex-col items-center"> ${!product.product_hidden_price && renderTemplate`<p class="text-center mb-5 text-2xl" id="example_product_price">${new Number(product.product_price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>`} <a${addAttribute(product.product_link, "href")} target="_blank" id="example_product_link" class="px-10 py-2 rounded-[10px] bg-green-600 hover:bg-green-700 active:bg-green-800 text-woodsmoke-50 text-xl">Ir para loja</a> </div> </div> <div class="px-5 pt-8 pb-1 rounded-b-[20px] -mt-7 bg-woodsmoke-50 text-woodsmoke-300 text-[9px] relative z-0">
Develope by: <a href="https://lucastiago.com.br" target="_blank" class="hover:text-amber-500">LTCODE</a> | Gostaria de ter um product viewer em seu site? <a href="#" target="_blank" class="hover:text-amber-500">Clique aqui</a>.
</div> </div> ` })}`;
}, "/mnt/nvme0n1p1/projetos/Astro/product-viewer-generator/src/pages/embeded.astro", void 0);

const $$file = "/mnt/nvme0n1p1/projetos/Astro/product-viewer-generator/src/pages/embeded.astro";
const $$url = "/embeded";

const embeded = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Embeded,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, embeded as e };
