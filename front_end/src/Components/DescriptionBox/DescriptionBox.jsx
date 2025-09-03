import React from "react";

function DescriptionBox() {
  return (
    <div className="mt-8 sm:mt-12 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-wrap gap-4 sm:gap-8 border-b border-gray-300 pb-2 sm:pb-3">
        <div className="text-base sm:text-lg font-semibold text-red-500 border-b-2 border-red-500 pb-1 sm:pb-2 cursor-pointer">
          Description
        </div>
        <div className="text-base sm:text-lg font-medium text-gray-600 hover:text-red-500 cursor-pointer transition">
          Reviews (122)
        </div>
      </div>

      <div className="mt-4 sm:mt-6 text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit
          exercitationem nihil accusantium aut et. Tempora animi omnis hic. Cum
          fuga asperiores culpa odit eius commodi voluptate eum voluptatibus
          cupiditate. Vero fugit dolores aperiam perspiciatis vitae omnis, quae
          enim officia perferendis illum quos ea repellendus sunt sapiente. Quo
          earum dolor ullam consequuntur repellat quasi maxime, obcaecati sint
          dicta minus unde.
        </p>
        <p>
          Maiores, harum dicta assumenda iure inventore aliquam voluptas esse
          nemo fuga molestias ad cumque minus mollitia enim sapiente at vero
          velit pariatur in odio debitis? Illo tempore quod perferendis
          officiis. Repudiandae dolor voluptates consequatur quis corporis, vero
          non officiis quibusdam adipisci.
        </p>
        <p>
          Amet at voluptatem ea itaque eaque magnam! Atque, sed ea facere
          voluptas deserunt ipsum numquam perferendis quasi ad in. Odit amet
          vero corporis possimus nisi omnis fugiat dignissimos nemo animi nihil
          quod.
        </p>
        <p>
          Accusantium in consequuntur perferendis unde tempore consectetur quas
          nisi voluptate et, impedit placeat, magni hic maxime quae nihil harum
          ab aliquam iste veniam modi voluptas neque voluptates!
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
