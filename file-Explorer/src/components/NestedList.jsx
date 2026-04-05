import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { FolderPlus } from "lucide-react";

const NestedList = ({ list }) => {
  const [isExpend, setIsExpend] = useState({});
  return (
    <div>
      <div className="pl-4">
        {list.map((node) => (
          <div>
            <div className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-gray-800 transition-all duration-200 group">
              {node.isFolder && (
                <span
                  className="cursor-pointer text-gray-400 group-hover:text-white"
                  onClick={() =>
                    setIsExpend((prev) => ({
                      ...prev,
                      [node.name]: !prev[node.name],
                    }))
                  }
                >
                  {isExpend?.[node.name] ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </span>
              )}
              <span className="text-gray-200 text-sm" key={node.id}>
                {node.name}
              </span>
              {node.isFolder && (
                <button className="ml-auto opacity-0 group-hover:opacity-100 text-gray-400 hover:text-green-400 transition">
                  <FolderPlus />
                </button>
              )}
            </div>
            {node?.children && isExpend?.[node.name] && (
              <NestedList list={node.children} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedList;
