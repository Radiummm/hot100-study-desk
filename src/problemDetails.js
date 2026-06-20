export const problemDetails = {
  "two-sum": {
    "method": "twoSum",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "target",
        "type": "integer"
      }
    ],
    "returnType": "integer[]",
    "description": "给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。",
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "note": "因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。"
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]"
      }
    ]
  },
  "group-anagrams": {
    "method": "groupAnagrams",
    "params": [
      {
        "name": "strs",
        "type": "string[]"
      }
    ],
    "returnType": "list<list<string>>",
    "description": "给你一个字符串数组，请你将 字母异位词 组合在一起。",
    "examples": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "参考原题示例输出"
      },
      {
        "input": "strs = [\"\"]",
        "output": "参考原题示例输出"
      }
    ]
  },
  "longest-consecutive-sequence": {
    "method": "longestConsecutive",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。",
    "examples": [
      {
        "input": "nums = [100,4,200,1,3,2]",
        "output": "4",
        "note": "最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。"
      },
      {
        "input": "nums = [0,3,7,2,5,8,4,6,0,1]",
        "output": "9"
      }
    ]
  },
  "move-zeroes": {
    "method": "moveZeroes",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "void",
    "description": "给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。",
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]"
      },
      {
        "input": "nums = [0]",
        "output": "[0]"
      }
    ]
  },
  "container-with-most-water": {
    "method": "maxArea",
    "params": [
      {
        "name": "height",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给定一个长度为 n 的整数数组 height 。",
    "examples": [
      {
        "input": "[1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "note": "图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。"
      },
      {
        "input": "height = [1,1]",
        "output": "1"
      }
    ]
  },
  "3sum": {
    "method": "threeSum",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "list<list<integer>>",
    "description": "给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。",
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "note": "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。\nnums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。\nnums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。\n不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。\n注意，输出的顺序和三元组的顺序并不重要。"
      },
      {
        "input": "nums = [0,1,1]",
        "output": "[]",
        "note": "唯一可能的三元组和不为 0 。"
      }
    ]
  },
  "trapping-rain-water": {
    "method": "trap",
    "params": [
      {
        "name": "height",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。",
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "note": "上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。"
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9"
      }
    ]
  },
  "longest-substring-without-repeating-characters": {
    "method": "lengthOfLongestSubstring",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "returnType": "integer",
    "description": "给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。",
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "note": "因为无重复字符的最长子串是 \"abc\"，所以其长度为 3。注意 \"bca\" 和 \"cab\" 也是正确答案。"
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1",
        "note": "因为无重复字符的最长子串是 \"b\"，所以其长度为 1。"
      }
    ]
  },
  "find-all-anagrams-in-a-string": {
    "method": "findAnagrams",
    "params": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "p",
        "type": "string"
      }
    ],
    "returnType": "list<integer>",
    "description": "给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。",
    "examples": [
      {
        "input": "s = \"cbaebabacd\", p = \"abc\"",
        "output": "[0,6]",
        "note": "起始索引等于 0 的子串是 \"cba\", 它是 \"abc\" 的异位词。\n起始索引等于 6 的子串是 \"bac\", 它是 \"abc\" 的异位词。"
      },
      {
        "input": "s = \"abab\", p = \"ab\"",
        "output": "[0,1,2]",
        "note": "起始索引等于 0 的子串是 \"ab\", 它是 \"ab\" 的异位词。\n起始索引等于 1 的子串是 \"ba\", 它是 \"ab\" 的异位词。\n起始索引等于 2 的子串是 \"ab\", 它是 \"ab\" 的异位词。"
      }
    ]
  },
  "subarray-sum-equals-k": {
    "method": "subarraySum",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "k",
        "type": "integer"
      }
    ],
    "returnType": "integer",
    "description": "给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。",
    "examples": [
      {
        "input": "nums = [1,1,1], k = 2",
        "output": "2"
      },
      {
        "input": "nums = [1,2,3], k = 3",
        "output": "2"
      }
    ]
  },
  "sliding-window-maximum": {
    "method": "maxSlidingWindow",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "k",
        "type": "integer"
      }
    ],
    "returnType": "integer[]",
    "description": "给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。",
    "examples": [
      {
        "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        "output": "[3,3,5,5,6,7]",
        "note": "滑动窗口的位置                最大值\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n1 [3  -1  -3] 5  3  6  7       3\n1  3 [-1  -3  5] 3  6  7       5\n1  3  -1 [-3  5  3] 6  7       5\n1  3  -1  -3 [5  3  6] 7       6\n1  3  -1  -3  5 [3  6  7]      7"
      },
      {
        "input": "nums = [1], k = 1",
        "output": "[1]"
      }
    ]
  },
  "minimum-window-substring": {
    "method": "minWindow",
    "params": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "t",
        "type": "string"
      }
    ],
    "returnType": "string",
    "description": "给定两个字符串 s 和 t，长度分别是 m 和 n，返回 s 中的 最短窗口 子串，使得该子串包含 t 中的每一个字符（包括重复字符）。",
    "examples": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\"",
        "note": "最小覆盖子串 \"BANC\" 包含来自字符串 t 的 'A'、'B' 和 'C'。"
      },
      {
        "input": "s = \"a\", t = \"a\"",
        "output": "\"a\"",
        "note": "整个字符串 s 是最小覆盖子串。"
      }
    ]
  },
  "maximum-subarray": {
    "method": "maxSubArray",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。",
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "note": "连续子数组 [4,-1,2,1] 的和最大，为 6 。"
      },
      {
        "input": "nums = [1]",
        "output": "1"
      }
    ]
  },
  "merge-intervals": {
    "method": "merge",
    "params": [
      {
        "name": "intervals",
        "type": "integer[][]"
      }
    ],
    "returnType": "integer[][]",
    "description": "以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。",
    "examples": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]",
        "note": "区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]."
      },
      {
        "input": "intervals = [[1,4],[4,5]]",
        "output": "[[1,5]]",
        "note": "区间 [1,4] 和 [4,5] 可被视为重叠区间。"
      }
    ]
  },
  "rotate-array": {
    "method": "rotate",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "k",
        "type": "integer"
      }
    ],
    "returnType": "void",
    "description": "给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。",
    "examples": [
      {
        "input": "nums = [1,2,3,4,5,6,7], k = 3",
        "output": "[5,6,7,1,2,3,4]",
        "note": "向右轮转 1 步: [7,1,2,3,4,5,6]\n向右轮转 2 步: [6,7,1,2,3,4,5]\n向右轮转 3 步: [5,6,7,1,2,3,4]"
      },
      {
        "input": "nums = [-1,-100,3,99], k = 2",
        "output": "[3,99,-1,-100]",
        "note": "向右轮转 1 步: [99,-1,-100,3]\n向右轮转 2 步: [3,99,-1,-100]"
      }
    ]
  },
  "product-of-array-except-self": {
    "method": "productExceptSelf",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer[]",
    "description": "给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除了 nums[i] 之外其余各元素的乘积 。",
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[24,12,8,6]"
      },
      {
        "input": "nums = [-1,1,0,-3,3]",
        "output": "[0,0,9,0,0]"
      }
    ]
  },
  "first-missing-positive": {
    "method": "firstMissingPositive",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。",
    "examples": [
      {
        "input": "nums = [1,2,0]",
        "output": "3",
        "note": "范围 [1,2] 中的数字都在数组中。"
      },
      {
        "input": "nums = [3,4,-1,1]",
        "output": "2",
        "note": "1 在数组中，但 2 没有。"
      }
    ]
  },
  "set-matrix-zeroes": {
    "method": "setZeroes",
    "params": [
      {
        "name": "matrix",
        "type": "integer[][]"
      }
    ],
    "returnType": "void",
    "description": "给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。",
    "examples": [
      {
        "input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        "output": "[[1,0,1],[0,0,0],[1,0,1]]"
      },
      {
        "input": "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"
      }
    ]
  },
  "spiral-matrix": {
    "method": "spiralOrder",
    "params": [
      {
        "name": "matrix",
        "type": "integer[][]"
      }
    ],
    "returnType": "list<integer>",
    "description": "给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。",
    "examples": [
      {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1,2,3,6,9,8,7,4,5]"
      },
      {
        "input": "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        "output": "[1,2,3,4,8,12,11,10,9,5,6,7]"
      }
    ]
  },
  "rotate-image": {
    "method": "rotate",
    "params": [
      {
        "name": "matrix",
        "type": "integer[][]"
      }
    ],
    "returnType": "void",
    "description": "给定一个 n × n 的二维矩阵 matrix 表示一个图像。",
    "examples": [
      {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7,4,1],[8,5,2],[9,6,3]]"
      },
      {
        "input": "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        "output": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]"
      }
    ]
  },
  "search-a-2d-matrix-ii": {
    "method": "searchMatrix",
    "params": [
      {
        "name": "matrix",
        "type": "integer[][]"
      },
      {
        "name": "target",
        "type": "integer"
      }
    ],
    "returnType": "boolean",
    "description": "编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。",
    "examples": [
      {
        "input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5",
        "output": "true"
      },
      {
        "input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20",
        "output": "false"
      }
    ]
  },
  "intersection-of-two-linked-lists": {
    "method": "getIntersectionNode",
    "params": [
      {
        "name": "intersectVal",
        "type": "integer"
      },
      {
        "name": "listA",
        "type": "ListNode"
      },
      {
        "name": "listB",
        "type": "ListNode"
      },
      {
        "name": "skipA",
        "type": "integer"
      },
      {
        "name": "skipB",
        "type": "integer"
      }
    ],
    "returnType": "ListNode",
    "description": "给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。",
    "examples": [
      {
        "input": "intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3",
        "output": "Intersected at '8'",
        "note": "相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。\n在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。\n— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。"
      },
      {
        "input": "intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1",
        "output": "Intersected at '2'",
        "note": "相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。\n在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。"
      }
    ]
  },
  "reverse-linked-list": {
    "method": "reverseList",
    "params": [
      {
        "name": "head",
        "type": "ListNode",
        "dealloc": false
      }
    ],
    "returnType": "ListNode",
    "description": "给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。",
    "examples": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]"
      },
      {
        "input": "head = [1,2]",
        "output": "[2,1]"
      }
    ]
  },
  "palindrome-linked-list": {
    "method": "isPalindrome",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "returnType": "boolean",
    "description": "给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。",
    "examples": [
      {
        "input": "head = [1,2,2,1]",
        "output": "true"
      },
      {
        "input": "head = [1,2]",
        "output": "false"
      }
    ]
  },
  "linked-list-cycle": {
    "method": "hasCycle",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
      },
      {
        "name": "pos",
        "type": "integer"
      }
    ],
    "returnType": "boolean",
    "description": "给你一个链表的头节点 head ，判断链表中是否有环。",
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true",
        "note": "链表中有一个环，其尾部连接到第二个节点。"
      },
      {
        "input": "head = [1,2], pos = 0",
        "output": "true",
        "note": "链表中有一个环，其尾部连接到第一个节点。"
      }
    ]
  },
  "linked-list-cycle-ii": {
    "method": "detectCycle",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
      },
      {
        "name": "pos",
        "type": "integer"
      }
    ],
    "returnType": "ListNode",
    "description": "给定一个链表的头节点 head ，返回链表开始入环的第一个节点。",
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "返回索引为 1 的链表节点",
        "note": "链表中有一个环，其尾部连接到第二个节点。"
      },
      {
        "input": "head = [1,2], pos = 0",
        "output": "返回索引为 0 的链表节点",
        "note": "链表中有一个环，其尾部连接到第一个节点。"
      }
    ]
  },
  "merge-two-sorted-lists": {
    "method": "mergeTwoLists",
    "params": [
      {
        "name": "list1",
        "type": "ListNode",
        "dealloc": false
      },
      {
        "name": "list2",
        "type": "ListNode",
        "dealloc": false
      }
    ],
    "returnType": "ListNode",
    "description": "将两个升序链表合并为一个新的 升序 链表并返回。",
    "examples": [
      {
        "input": "l1 = [1,2,4], l2 = [1,3,4]",
        "output": "[1,1,2,3,4,4]"
      },
      {
        "input": "l1 = [], l2 = []",
        "output": "[]"
      }
    ]
  },
  "add-two-numbers": {
    "method": "addTwoNumbers",
    "params": [
      {
        "name": "l1",
        "type": "ListNode",
        "dealloc": false
      },
      {
        "name": "l2",
        "type": "ListNode",
        "dealloc": false
      }
    ],
    "returnType": "ListNode",
    "description": "给你两个 非空 的链表，表示两个非负的整数。",
    "examples": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]",
        "note": "342 + 465 = 807."
      },
      {
        "input": "l1 = [0], l2 = [0]",
        "output": "[0]"
      }
    ]
  },
  "remove-nth-node-from-end-of-list": {
    "method": "removeNthFromEnd",
    "params": [
      {
        "name": "head",
        "type": "ListNode",
        "dealloc": false
      },
      {
        "name": "n",
        "type": "integer"
      }
    ],
    "returnType": "ListNode",
    "description": "给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。",
    "examples": [
      {
        "input": "head = [1,2,3,4,5], n = 2",
        "output": "[1,2,3,5]"
      },
      {
        "input": "head = [1], n = 1",
        "output": "[]"
      }
    ]
  },
  "swap-nodes-in-pairs": {
    "method": "swapPairs",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "returnType": "ListNode",
    "description": "给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。",
    "examples": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[2,1,4,3]"
      },
      {
        "input": "head = []",
        "output": "[]"
      }
    ]
  },
  "reverse-nodes-in-k-group": {
    "method": "reverseKGroup",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
      },
      {
        "name": "k",
        "type": "integer"
      }
    ],
    "returnType": "ListNode",
    "description": "给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。",
    "examples": [
      {
        "input": "head = [1,2,3,4,5], k = 2",
        "output": "[2,1,4,3,5]"
      },
      {
        "input": "head = [1,2,3,4,5], k = 3",
        "output": "[3,2,1,4,5]"
      }
    ]
  },
  "copy-list-with-random-pointer": {
    "method": "copyRandomList",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "returnType": "ListNode",
    "description": "给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。",
    "examples": [
      {
        "input": "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "output": "[[7,null],[13,0],[11,4],[10,2],[1,0]]"
      },
      {
        "input": "head = [[1,1],[2,1]]",
        "output": "[[1,1],[2,1]]"
      }
    ]
  },
  "sort-list": {
    "method": "sortList",
    "params": [
      {
        "name": "head",
        "type": "ListNode",
        "dealloc": false
      }
    ],
    "returnType": "ListNode",
    "description": "给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。",
    "examples": [
      {
        "input": "head = [4,2,1,3]",
        "output": "[1,2,3,4]"
      },
      {
        "input": "head = [-1,5,3,4,0]",
        "output": "[-1,0,3,4,5]"
      }
    ]
  },
  "merge-k-sorted-lists": {
    "method": "mergeKLists",
    "params": [
      {
        "name": "lists",
        "type": "ListNode[]",
        "dealloc": false
      }
    ],
    "returnType": "ListNode",
    "description": "给你一个链表数组，每个链表都已经按升序排列。",
    "examples": [
      {
        "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "output": "[1,1,2,3,4,4,5,6]",
        "note": "链表数组如下：\n[\n1->4->5,\n1->3->4,\n2->6\n]\n将它们合并到一个有序链表中得到。\n1->1->2->3->4->4->5->6"
      },
      {
        "input": "lists = []",
        "output": "[]"
      }
    ]
  },
  "lru-cache": {
    "method": "solve",
    "params": [
      {
        "name": "inputs",
        "type": "integer[]"
      },
      {
        "name": "inputs",
        "type": "integer[]"
      }
    ],
    "returnType": "list<String>",
    "description": "请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。",
    "examples": [
      {
        "input": "参考原题示例输入",
        "output": "参考原题示例输出"
      }
    ]
  },
  "binary-tree-inorder-traversal": {
    "method": "inorderTraversal",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "list<integer>",
    "description": "给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。",
    "examples": [
      {
        "input": "root = [1,null,2,3]",
        "output": "[1,3,2]"
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ]
  },
  "maximum-depth-of-binary-tree": {
    "method": "maxDepth",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "integer",
    "description": "给定一个二叉树 root ，返回其最大深度。",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3"
      },
      {
        "input": "root = [1,null,2]",
        "output": "2"
      }
    ]
  },
  "invert-binary-tree": {
    "method": "invertTree",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "TreeNode",
    "description": "给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。",
    "examples": [
      {
        "input": "root = [4,2,7,1,3,6,9]",
        "output": "[4,7,2,9,6,3,1]"
      },
      {
        "input": "root = [2,1,3]",
        "output": "[2,3,1]"
      }
    ]
  },
  "symmetric-tree": {
    "method": "isSymmetric",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "boolean",
    "description": "给你一个二叉树的根节点 root ， 检查它是否轴对称。",
    "examples": [
      {
        "input": "root = [1,2,2,3,4,4,3]",
        "output": "true"
      },
      {
        "input": "root = [1,2,2,null,3,null,3]",
        "output": "false"
      }
    ]
  },
  "diameter-of-binary-tree": {
    "method": "diameterOfBinaryTree",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "integer",
    "description": "给你一棵二叉树的根节点，返回该树的 直径 。",
    "examples": [
      {
        "input": "root = [1,2,3,4,5]",
        "output": "3",
        "note": "3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。"
      },
      {
        "input": "root = [1,2]",
        "output": "1"
      }
    ]
  },
  "binary-tree-level-order-traversal": {
    "method": "levelOrder",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "list<list<integer>>",
    "description": "给你二叉树的根节点 root ，返回其节点值的 层序遍历 。",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]"
      },
      {
        "input": "root = [1]",
        "output": "[[1]]"
      }
    ]
  },
  "convert-sorted-array-to-binary-search-tree": {
    "method": "sortedArrayToBST",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "TreeNode",
    "description": "给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。",
    "examples": [
      {
        "input": "nums = [-10,-3,0,5,9]",
        "output": "[0,-3,9,-10,null,5]",
        "note": "[0,-10,5,null,-3,null,9] 也将被视为正确答案："
      },
      {
        "input": "nums = [1,3]",
        "output": "[3,1]",
        "note": "[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。"
      }
    ]
  },
  "validate-binary-search-tree": {
    "method": "isValidBST",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "boolean",
    "description": "给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。",
    "examples": [
      {
        "input": "root = [2,1,3]",
        "output": "true"
      },
      {
        "input": "root = [5,1,4,null,null,3,6]",
        "output": "false",
        "note": "根节点的值是 5 ，但是右子节点的值是 4 。"
      }
    ]
  },
  "kth-smallest-element-in-a-bst": {
    "method": "kthSmallest",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      },
      {
        "name": "k",
        "type": "integer"
      }
    ],
    "returnType": "integer",
    "description": "给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（k 从 1 开始计数）。",
    "examples": [
      {
        "input": "root = [3,1,4,null,2], k = 1",
        "output": "1"
      },
      {
        "input": "root = [5,3,6,2,4,null,null,1], k = 3",
        "output": "3"
      }
    ]
  },
  "binary-tree-right-side-view": {
    "method": "rightSideView",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "list<integer>",
    "description": "给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。",
    "examples": [
      {
        "input": "root = [1,2,3,null,5,null,4]",
        "output": "参考原题示例输出"
      },
      {
        "input": "root = [1,2,3,4,null,null,null,5]",
        "output": "参考原题示例输出"
      }
    ]
  },
  "flatten-binary-tree-to-linked-list": {
    "method": "flatten",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "void",
    "description": "给你二叉树的根结点 root ，请你将它展开为一个单链表： 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。",
    "examples": [
      {
        "input": "root = [1,2,5,3,4,null,6]",
        "output": "[1,null,2,null,3,null,4,null,5,null,6]"
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ]
  },
  "construct-binary-tree-from-preorder-and-inorder-traversal": {
    "method": "buildTree",
    "params": [
      {
        "name": "preorder",
        "type": "integer[]"
      },
      {
        "name": "inorder",
        "type": "integer[]"
      }
    ],
    "returnType": "TreeNode",
    "description": "给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。",
    "examples": [
      {
        "input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        "output": "[3,9,20,null,null,15,7]"
      },
      {
        "input": "preorder = [-1], inorder = [-1]",
        "output": "[-1]"
      }
    ]
  },
  "path-sum-iii": {
    "method": "pathSum",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      },
      {
        "name": "targetSum",
        "type": "integer"
      }
    ],
    "returnType": "integer",
    "description": "给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。",
    "examples": [
      {
        "input": "root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8",
        "output": "3",
        "note": "和等于 8 的路径有 3 条，如图所示。"
      },
      {
        "input": "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",
        "output": "3"
      }
    ]
  },
  "lowest-common-ancestor-of-a-binary-tree": {
    "method": "lowestCommonAncestor",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      },
      {
        "name": "p",
        "type": "integer"
      },
      {
        "name": "q",
        "type": "integer"
      }
    ],
    "returnType": "TreeNode",
    "description": "给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。",
    "examples": [
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        "output": "3",
        "note": "节点 5 和节点 1 的最近公共祖先是节点 3 。"
      },
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
        "output": "5",
        "note": "节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。"
      }
    ]
  },
  "binary-tree-maximum-path-sum": {
    "method": "maxPathSum",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "returnType": "integer",
    "description": "二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。",
    "examples": [
      {
        "input": "root = [1,2,3]",
        "output": "6",
        "note": "最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6"
      },
      {
        "input": "root = [-10,9,20,null,null,15,7]",
        "output": "42",
        "note": "最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42"
      }
    ]
  },
  "number-of-islands": {
    "method": "numIslands",
    "params": [
      {
        "name": "grid",
        "type": "character[][]"
      }
    ],
    "returnType": "integer",
    "description": "给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。",
    "examples": [
      {
        "input": "grid = [\n['1','1','1','1','0'],\n['1','1','0','1','0'],\n['1','1','0','0','0'],\n['0','0','0','0','0']\n]",
        "output": "1"
      },
      {
        "input": "grid = [\n['1','1','0','0','0'],\n['1','1','0','0','0'],\n['0','0','1','0','0'],\n['0','0','0','1','1']\n]",
        "output": "3"
      }
    ]
  },
  "rotting-oranges": {
    "method": "orangesRotting",
    "params": [
      {
        "name": "grid",
        "type": "integer[][]"
      }
    ],
    "returnType": "integer",
    "description": "在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一： 值 0 代表空单元格。",
    "examples": [
      {
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4"
      },
      {
        "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1",
        "note": "左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个方向上。"
      }
    ]
  },
  "course-schedule": {
    "method": "canFinish",
    "params": [
      {
        "name": "numCourses",
        "type": "integer"
      },
      {
        "name": "prerequisites",
        "type": "integer[][]"
      }
    ],
    "returnType": "boolean",
    "description": "你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。",
    "examples": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "true",
        "note": "总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。"
      },
      {
        "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        "output": "false",
        "note": "总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。"
      }
    ]
  },
  "implement-trie-prefix-tree": {
    "method": "solve",
    "params": [],
    "returnType": "boolean",
    "description": "Trie（发音类似 \"try\"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。",
    "examples": [
      {
        "input": "参考原题示例输入",
        "output": "参考原题示例输出"
      }
    ]
  },
  "permutations": {
    "method": "permute",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "list<list<integer>>",
    "description": "给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      },
      {
        "input": "nums = [0,1]",
        "output": "[[0,1],[1,0]]"
      }
    ]
  },
  "subsets": {
    "method": "subsets",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "list<list<integer>>",
    "description": "给你一个整数数组 nums ，数组中的元素 互不相同 。",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
      },
      {
        "input": "nums = [0]",
        "output": "[[],[0]]"
      }
    ]
  },
  "letter-combinations-of-a-phone-number": {
    "method": "letterCombinations",
    "params": [
      {
        "name": "digits",
        "type": "string"
      }
    ],
    "returnType": "list<string>",
    "description": "给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。",
    "examples": [
      {
        "input": "digits = \"23\"",
        "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
      },
      {
        "input": "digits = \"2\"",
        "output": "[\"a\",\"b\",\"c\"]"
      }
    ]
  },
  "combination-sum": {
    "method": "combinationSum",
    "params": [
      {
        "name": "candidates",
        "type": "integer[]"
      },
      {
        "name": "target",
        "type": "integer"
      }
    ],
    "returnType": "list<list<integer>>",
    "description": "给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。",
    "examples": [
      {
        "input": "candidates = [2,3,6,7], target = 7",
        "output": "[[2,2,3],[7]]",
        "note": "2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。\n7 也是一个候选， 7 = 7 。\n仅有这两种组合。"
      },
      {
        "input": "candidates = [2,3,5], target = 8",
        "output": "[[2,2,2,2],[2,3,3],[3,5]]"
      }
    ]
  },
  "generate-parentheses": {
    "method": "generateParenthesis",
    "params": [
      {
        "name": "n",
        "type": "integer"
      }
    ],
    "returnType": "list<string>",
    "description": "数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。",
    "examples": [
      {
        "input": "n = 3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
      },
      {
        "input": "n = 1",
        "output": "[\"()\"]"
      }
    ]
  },
  "word-search": {
    "method": "exist",
    "params": [
      {
        "name": "board",
        "type": "character[][]"
      },
      {
        "name": "word",
        "type": "string"
      }
    ],
    "returnType": "boolean",
    "description": "给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。",
    "examples": [
      {
        "input": "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = \"ABCCED\"",
        "output": "true"
      },
      {
        "input": "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = \"SEE\"",
        "output": "true"
      }
    ]
  },
  "palindrome-partitioning": {
    "method": "partition",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "returnType": "list<list<string>>",
    "description": "给你一个字符串 s，请你将 s 分割成一些 子串，使每个子串都是 回文串 。",
    "examples": [
      {
        "input": "s = \"aab\"",
        "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]"
      },
      {
        "input": "s = \"a\"",
        "output": "[[\"a\"]]"
      }
    ]
  },
  "n-queens": {
    "method": "solveNQueens",
    "params": [
      {
        "name": "n",
        "type": "integer"
      }
    ],
    "returnType": "list<list<string>>",
    "description": "按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。",
    "examples": [
      {
        "input": "n = 4",
        "output": "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
        "note": "如上图所示，4 皇后问题存在两个不同的解法。"
      },
      {
        "input": "n = 1",
        "output": "[[\"Q\"]]"
      }
    ]
  },
  "search-insert-position": {
    "method": "searchInsert",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "target",
        "type": "integer"
      }
    ],
    "returnType": "integer",
    "description": "给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。",
    "examples": [
      {
        "input": "nums = [1,3,5,6], target = 5",
        "output": "2"
      },
      {
        "input": "nums = [1,3,5,6], target = 2",
        "output": "1"
      }
    ]
  },
  "search-a-2d-matrix": {
    "method": "searchMatrix",
    "params": [
      {
        "name": "matrix",
        "type": "integer[][]"
      },
      {
        "name": "target",
        "type": "integer"
      }
    ],
    "returnType": "boolean",
    "description": "给你一个满足下述两条属性的 m x n 整数矩阵： 每行中的整数从左到右按非严格递增顺序排列。",
    "examples": [
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "output": "true"
      },
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        "output": "false"
      }
    ]
  },
  "find-first-and-last-position-of-element-in-sorted-array": {
    "method": "searchRange",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "target",
        "type": "integer"
      }
    ],
    "returnType": "integer[]",
    "description": "给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。",
    "examples": [
      {
        "input": "nums = [5,7,7,8,8,10], target = 8",
        "output": "[3,4]"
      },
      {
        "input": "nums = [5,7,7,8,8,10], target = 6",
        "output": "[-1,-1]"
      }
    ]
  },
  "search-in-rotated-sorted-array": {
    "method": "search",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "target",
        "type": "integer"
      }
    ],
    "returnType": "integer",
    "description": "整数数组 nums 按升序排列，数组中的值 互不相同 。",
    "examples": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4"
      },
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "output": "-1"
      }
    ]
  },
  "find-minimum-in-rotated-sorted-array": {
    "method": "findMin",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。",
    "examples": [
      {
        "input": "nums = [3,4,5,1,2]",
        "output": "1",
        "note": "原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。"
      },
      {
        "input": "nums = [4,5,6,7,0,1,2]",
        "output": "0",
        "note": "原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。"
      }
    ]
  },
  "median-of-two-sorted-arrays": {
    "method": "findMedianSortedArrays",
    "params": [
      {
        "name": "nums1",
        "type": "integer[]"
      },
      {
        "name": "nums2",
        "type": "integer[]"
      }
    ],
    "returnType": "double",
    "description": "给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。",
    "examples": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.00000",
        "note": "合并数组 = [1,2,3] ，中位数 2"
      },
      {
        "input": "nums1 = [1,2], nums2 = [3,4]",
        "output": "2.50000",
        "note": "合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5"
      }
    ]
  },
  "valid-parentheses": {
    "method": "isValid",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "returnType": "boolean",
    "description": "给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。",
    "examples": [
      {
        "input": "s = \"()\"",
        "output": "参考原题示例输出"
      },
      {
        "input": "s = \"()[]{}\"",
        "output": "参考原题示例输出"
      }
    ]
  },
  "min-stack": {
    "method": "solve",
    "params": [],
    "returnType": "boolean",
    "description": "设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。",
    "examples": [
      {
        "input": "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]",
        "output": "[null,null,null,null,-3,null,0,-2]",
        "note": "MinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   --> 返回 -3.\nminStack.pop();\nminStack.top();      --> 返回 0.\nminStack.getMin();   --> 返回 -2."
      }
    ]
  },
  "decode-string": {
    "method": "decodeString",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "returnType": "string",
    "description": "给定一个经过编码的字符串，返回它解码后的字符串。",
    "examples": [
      {
        "input": "s = \"3[a]2[bc]\"",
        "output": "\"aaabcbc\""
      },
      {
        "input": "s = \"3[a2[c]]\"",
        "output": "\"accaccacc\""
      }
    ]
  },
  "daily-temperatures": {
    "method": "dailyTemperatures",
    "params": [
      {
        "name": "temperatures",
        "type": "integer[]"
      }
    ],
    "returnType": "integer[]",
    "description": "给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。",
    "examples": [
      {
        "input": "temperatures = [73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]"
      },
      {
        "input": "temperatures = [30,40,50,60]",
        "output": "[1,1,1,0]"
      }
    ]
  },
  "largest-rectangle-in-histogram": {
    "method": "largestRectangleArea",
    "params": [
      {
        "name": "heights",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给定 n 个非负整数，用来表示柱状图中各个柱子的高度。",
    "examples": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10",
        "note": "最大的矩形为图中红色区域，面积为 10"
      },
      {
        "input": "heights = [2,4]",
        "output": "4"
      }
    ]
  },
  "kth-largest-element-in-an-array": {
    "method": "findKthLargest",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "k",
        "type": "integer"
      }
    ],
    "returnType": "integer",
    "description": "给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。",
    "examples": [
      {
        "input": "[3,2,1,5,6,4], k = 2",
        "output": "5"
      },
      {
        "input": "[3,2,3,1,2,4,5,5,6], k = 4",
        "output": "4"
      }
    ]
  },
  "top-k-frequent-elements": {
    "method": "topKFrequent",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "k",
        "type": "integer"
      }
    ],
    "returnType": "integer[]",
    "description": "给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。",
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "参考原题示例输出"
      },
      {
        "input": "nums = [1], k = 1",
        "output": "参考原题示例输出"
      }
    ]
  },
  "find-median-from-data-stream": {
    "method": "solve",
    "params": [],
    "returnType": "boolean",
    "description": "中位数是有序整数列表中的中间值。",
    "examples": [
      {
        "input": "参考原题示例输入",
        "output": "参考原题示例输出"
      }
    ]
  },
  "best-time-to-buy-and-sell-stock": {
    "method": "maxProfit",
    "params": [
      {
        "name": "prices",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。",
    "examples": [
      {
        "input": "[7,1,5,3,6,4]",
        "output": "5",
        "note": "在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。\n注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。"
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0",
        "note": "在这种情况下, 没有交易完成, 所以最大利润为 0。"
      }
    ]
  },
  "jump-game": {
    "method": "canJump",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "boolean",
    "description": "给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。",
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "true",
        "note": "可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。"
      },
      {
        "input": "nums = [3,2,1,0,4]",
        "output": "false",
        "note": "无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。"
      }
    ]
  },
  "jump-game-ii": {
    "method": "jump",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给定一个长度为 n 的 0 索引整数数组 nums。",
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "2",
        "note": "跳到最后一个位置的最小跳跃数是 2。\n从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。"
      },
      {
        "input": "nums = [2,3,0,1,4]",
        "output": "2"
      }
    ]
  },
  "partition-labels": {
    "method": "partitionLabels",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "returnType": "list<integer>",
    "description": "给你一个字符串 s 。",
    "examples": [
      {
        "input": "s = \"ababcbacadefegdehijhklij\"",
        "output": "[9,7,8]",
        "note": "划分结果为 \"ababcbaca\"、\"defegde\"、\"hijhklij\" 。\n每个字母最多出现在一个片段中。\n像 \"ababcbacadefegde\", \"hijhklij\" 这样的划分是错误的，因为划分的片段数较少。"
      },
      {
        "input": "s = \"eccbbbbdec\"",
        "output": "[10]"
      }
    ]
  },
  "climbing-stairs": {
    "method": "climbStairs",
    "params": [
      {
        "name": "n",
        "type": "integer"
      }
    ],
    "returnType": "integer",
    "description": "需要 n 阶你才能到达楼顶。",
    "examples": [
      {
        "input": "n = 2",
        "output": "2",
        "note": "有两种方法可以爬到楼顶。\n1. 1 阶 + 1 阶\n2. 2 阶"
      },
      {
        "input": "n = 3",
        "output": "3",
        "note": "有三种方法可以爬到楼顶。\n1. 1 阶 + 1 阶 + 1 阶\n2. 1 阶 + 2 阶\n3. 2 阶 + 1 阶"
      }
    ]
  },
  "pascals-triangle": {
    "method": "generate",
    "params": [
      {
        "name": "numRows",
        "type": "integer"
      }
    ],
    "returnType": "list<list<integer>>",
    "description": "给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。",
    "examples": [
      {
        "input": "numRows = 5",
        "output": "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]"
      },
      {
        "input": "numRows = 1",
        "output": "[[1]]"
      }
    ]
  },
  "house-robber": {
    "method": "rob",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "你是一个专业的小偷，计划偷窃沿街的房屋。",
    "examples": [
      {
        "input": "[1,2,3,1]",
        "output": "4",
        "note": "偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。\n偷窃到的最高金额 = 1 + 3 = 4 。"
      },
      {
        "input": "[2,7,9,3,1]",
        "output": "12",
        "note": "偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。\n偷窃到的最高金额 = 2 + 9 + 1 = 12 。"
      }
    ]
  },
  "perfect-squares": {
    "method": "numSquares",
    "params": [
      {
        "name": "n",
        "type": "integer"
      }
    ],
    "returnType": "integer",
    "description": "给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。",
    "examples": [
      {
        "input": "n = 12",
        "output": "3",
        "note": "12 = 4 + 4 + 4"
      },
      {
        "input": "n = 13",
        "output": "2",
        "note": "13 = 4 + 9"
      }
    ]
  },
  "coin-change": {
    "method": "coinChange",
    "params": [
      {
        "name": "coins",
        "type": "integer[]"
      },
      {
        "name": "amount",
        "type": "integer"
      }
    ],
    "returnType": "integer",
    "description": "给你一个整数数组 coins ，表示不同面额的硬币。",
    "examples": [
      {
        "input": "coins = [1, 2, 5], amount = 11",
        "output": "3",
        "note": "11 = 5 + 5 + 1"
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1"
      }
    ]
  },
  "word-break": {
    "method": "wordBreak",
    "params": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "wordDict",
        "type": "list<string>"
      }
    ],
    "returnType": "boolean",
    "description": "给你一个字符串 s 和一个字符串列表 wordDict 作为字典。",
    "examples": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\", \"code\"]",
        "output": "true",
        "note": "返回 true 因为 \"leetcode\" 可以由 \"leet\" 和 \"code\" 拼接成。"
      },
      {
        "input": "s = \"applepenapple\", wordDict = [\"apple\", \"pen\"]",
        "output": "true",
        "note": "返回 true 因为 \"applepenapple\" 可以由 \"apple\" \"pen\" \"apple\" 拼接成。\n注意，你可以重复使用字典中的单词。"
      }
    ]
  },
  "longest-increasing-subsequence": {
    "method": "lengthOfLIS",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。",
    "examples": [
      {
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "output": "4",
        "note": "最长递增子序列是 [2,3,7,101]，因此长度为 4 。"
      },
      {
        "input": "nums = [0,1,0,3,2,3]",
        "output": "4"
      }
    ]
  },
  "maximum-product-subarray": {
    "method": "maxProduct",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续 子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。",
    "examples": [
      {
        "input": "nums = [2,3,-2,4]",
        "output": "6",
        "note": "子数组 [2,3] 有最大乘积 6。"
      },
      {
        "input": "nums = [-2,0,-1]",
        "output": "0",
        "note": "结果不能为 2, 因为 [-2,-1] 不是子数组。"
      }
    ]
  },
  "partition-equal-subset-sum": {
    "method": "canPartition",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "boolean",
    "description": "给你一个 只包含正整数 的 非空 数组 nums 。",
    "examples": [
      {
        "input": "nums = [1,5,11,5]",
        "output": "true",
        "note": "数组可以分割成 [1, 5, 5] 和 [11] 。"
      },
      {
        "input": "nums = [1,2,3,5]",
        "output": "false",
        "note": "数组不能分割成两个元素和相等的子集。"
      }
    ]
  },
  "longest-valid-parentheses": {
    "method": "longestValidParentheses",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "returnType": "integer",
    "description": "给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号 子串 的长度。",
    "examples": [
      {
        "input": "s = \"(()\"",
        "output": "2",
        "note": "最长有效括号子串是 \"()\""
      },
      {
        "input": "s = \")()())\"",
        "output": "4",
        "note": "最长有效括号子串是 \"()()\""
      }
    ]
  },
  "unique-paths": {
    "method": "uniquePaths",
    "params": [
      {
        "name": "m",
        "type": "integer"
      },
      {
        "name": "n",
        "type": "integer"
      }
    ],
    "returnType": "integer",
    "description": "一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。",
    "examples": [
      {
        "input": "m = 3, n = 7",
        "output": "28"
      },
      {
        "input": "m = 3, n = 2",
        "output": "3",
        "note": "从左上角开始，总共有 3 条路径可以到达右下角。\n1. 向右 -> 向下 -> 向下\n2. 向下 -> 向下 -> 向右\n3. 向下 -> 向右 -> 向下"
      }
    ]
  },
  "minimum-path-sum": {
    "method": "minPathSum",
    "params": [
      {
        "name": "grid",
        "type": "integer[][]"
      }
    ],
    "returnType": "integer",
    "description": "给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。",
    "examples": [
      {
        "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
        "output": "7",
        "note": "因为路径 1→3→1→1→1 的总和最小。"
      },
      {
        "input": "grid = [[1,2,3],[4,5,6]]",
        "output": "12"
      }
    ]
  },
  "longest-palindromic-substring": {
    "method": "longestPalindrome",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "returnType": "string",
    "description": "给你一个字符串 s，找到 s 中最长的 回文 子串。",
    "examples": [
      {
        "input": "s = \"babad\"",
        "output": "\"bab\"",
        "note": "\"aba\" 同样是符合题意的答案。"
      },
      {
        "input": "s = \"cbbd\"",
        "output": "\"bb\""
      }
    ]
  },
  "longest-common-subsequence": {
    "method": "longestCommonSubsequence",
    "params": [
      {
        "name": "text1",
        "type": "string"
      },
      {
        "type": "string",
        "name": "text2"
      }
    ],
    "returnType": "integer",
    "description": "给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。",
    "examples": [
      {
        "input": "text1 = \"abcde\", text2 = \"ace\"",
        "output": "3",
        "note": "最长公共子序列是 \"ace\" ，它的长度为 3 。"
      },
      {
        "input": "text1 = \"abc\", text2 = \"abc\"",
        "output": "3",
        "note": "最长公共子序列是 \"abc\" ，它的长度为 3 。"
      }
    ]
  },
  "edit-distance": {
    "method": "minDistance",
    "params": [
      {
        "name": "word1",
        "type": "string"
      },
      {
        "name": "word2",
        "type": "string"
      }
    ],
    "returnType": "integer",
    "description": "给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数 。",
    "examples": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3",
        "note": "horse -> rorse (将 'h' 替换为 'r')\nrorse -> rose (删除 'r')\nrose -> ros (删除 'e')"
      },
      {
        "input": "word1 = \"intention\", word2 = \"execution\"",
        "output": "5",
        "note": "intention -> inention (删除 't')\ninention -> enention (将 'i' 替换为 'e')\nenention -> exention (将 'n' 替换为 'x')\nexention -> exection (将 'n' 替换为 'c')\nexection -> execution (插入 'u')"
      }
    ]
  },
  "single-number": {
    "method": "singleNumber",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。",
    "examples": [
      {
        "input": "nums = [2,2,1]",
        "output": "参考原题示例输出"
      },
      {
        "input": "nums = [4,1,2,1,2]",
        "output": "参考原题示例输出"
      }
    ]
  },
  "majority-element": {
    "method": "majorityElement",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给定一个大小为 n 的数组 nums ，返回其中的多数元素。",
    "examples": [
      {
        "input": "nums = [3,2,3]",
        "output": "3"
      },
      {
        "input": "nums = [2,2,1,1,1,2,2]",
        "output": "2"
      }
    ]
  },
  "sort-colors": {
    "method": "sortColors",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "void",
    "description": "给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。",
    "examples": [
      {
        "input": "nums = [2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]"
      },
      {
        "input": "nums = [2,0,1]",
        "output": "[0,1,2]"
      }
    ]
  },
  "next-permutation": {
    "method": "nextPermutation",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "void",
    "description": "整数数组的一个 排列 就是将其所有成员以序列或线性顺序排列。",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[1,3,2]"
      },
      {
        "input": "nums = [3,2,1]",
        "output": "[1,2,3]"
      }
    ]
  },
  "find-the-duplicate-number": {
    "method": "findDuplicate",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "returnType": "integer",
    "description": "给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。",
    "examples": [
      {
        "input": "nums = [1,3,4,2,2]",
        "output": "2"
      },
      {
        "input": "nums = [3,1,3,4,2]",
        "output": "3"
      }
    ]
  }
};
