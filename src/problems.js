import { hot100Base } from "./problemBase";
import { problemDetails } from "./problemDetails";
import { makeSolution } from "./solutionBook";

function formatParams(params) {
  if (!params?.length) return "按 LeetCode 类或函数签名传入参数。";
  return params.map((param) => `${param.name}: ${param.type}`).join("，");
}

export const hot100Problems = hot100Base.map((problem) => {
  const detail = problemDetails[problem.titleSlug] || {};
  const solution = makeSolution(problem);

  return {
    ...problem,
    description: detail.description || `解决「${problem.cnTitle}」这道 ${problem.group} 题。`,
    inputFormat: `调用 ${detail.method || "solve"}(${formatParams(detail.params)})。`,
    outputFormat: `返回 ${detail.returnType || "题目要求的结果"}。`,
    examples: detail.examples?.length
      ? detail.examples
      : [{ input: "参考原题示例输入", output: "返回题目要求的结果" }],
    solution,
    complexity: solution.complexity,
  };
});
