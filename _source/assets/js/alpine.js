import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";
import persist from "@alpinejs/persist";
import morph from "@alpinejs/morph";
import mask from "@alpinejs/mask";
import intersect from "@alpinejs/intersect";

window.Alpine = Alpine;
Alpine.plugin(focus);
Alpine.plugin(collapse);
Alpine.plugin(persist);
Alpine.plugin(morph);
Alpine.plugin(mask);
Alpine.plugin(intersect);

Alpine.start();
