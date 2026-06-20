export const codeBySlug = {
  "two-sum": `class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i, x in enumerate(nums):
            if target - x in seen:
                return [seen[target - x], i]
            seen[x] = i`,
  "group-anagrams": `from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs):
        groups = defaultdict(list)
        for s in strs:
            groups["".join(sorted(s))].append(s)
        return list(groups.values())`,
  "longest-consecutive-sequence": `class Solution:
    def longestConsecutive(self, nums):
        values = set(nums)
        ans = 0
        for x in values:
            if x - 1 not in values:
                y = x
                while y in values:
                    y += 1
                ans = max(ans, y - x)
        return ans`,
  "move-zeroes": `class Solution:
    def moveZeroes(self, nums):
        write = 0
        for read, x in enumerate(nums):
            if x != 0:
                nums[write], nums[read] = nums[read], nums[write]
                write += 1`,
  "container-with-most-water": `class Solution:
    def maxArea(self, height):
        l, r = 0, len(height) - 1
        ans = 0
        while l < r:
            ans = max(ans, (r - l) * min(height[l], height[r]))
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return ans`,
  "3sum": `class Solution:
    def threeSum(self, nums):
        nums.sort()
        ans = []
        for i, a in enumerate(nums):
            if i and a == nums[i - 1]:
                continue
            if a > 0:
                break
            l, r = i + 1, len(nums) - 1
            while l < r:
                s = a + nums[l] + nums[r]
                if s == 0:
                    ans.append([a, nums[l], nums[r]])
                    l += 1
                    r -= 1
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
                    while l < r and nums[r] == nums[r + 1]:
                        r -= 1
                elif s < 0:
                    l += 1
                else:
                    r -= 1
        return ans`,
  "trapping-rain-water": `class Solution:
    def trap(self, height):
        l, r = 0, len(height) - 1
        left_max = right_max = water = 0
        while l < r:
            if height[l] < height[r]:
                left_max = max(left_max, height[l])
                water += left_max - height[l]
                l += 1
            else:
                right_max = max(right_max, height[r])
                water += right_max - height[r]
                r -= 1
        return water`,
  "longest-substring-without-repeating-characters": `class Solution:
    def lengthOfLongestSubstring(self, s):
        last = {}
        left = ans = 0
        for right, ch in enumerate(s):
            if ch in last and last[ch] >= left:
                left = last[ch] + 1
            last[ch] = right
            ans = max(ans, right - left + 1)
        return ans`,
  "find-all-anagrams-in-a-string": `from collections import Counter

class Solution:
    def findAnagrams(self, s, p):
        need, window = Counter(p), Counter()
        ans, left = [], 0
        for right, ch in enumerate(s):
            window[ch] += 1
            if right - left + 1 > len(p):
                old = s[left]
                window[old] -= 1
                if window[old] == 0:
                    del window[old]
                left += 1
            if window == need:
                ans.append(left)
        return ans`,
  "subarray-sum-equals-k": `from collections import defaultdict

class Solution:
    def subarraySum(self, nums, k):
        count = defaultdict(int)
        count[0] = 1
        prefix = ans = 0
        for x in nums:
            prefix += x
            ans += count[prefix - k]
            count[prefix] += 1
        return ans`,
  "sliding-window-maximum": `from collections import deque

class Solution:
    def maxSlidingWindow(self, nums, k):
        q, ans = deque(), []
        for i, x in enumerate(nums):
            while q and q[0] <= i - k:
                q.popleft()
            while q and nums[q[-1]] <= x:
                q.pop()
            q.append(i)
            if i >= k - 1:
                ans.append(nums[q[0]])
        return ans`,
  "minimum-window-substring": `from collections import Counter

class Solution:
    def minWindow(self, s, t):
        need = Counter(t)
        missing = len(t)
        left = start = end = 0
        for right, ch in enumerate(s, 1):
            if need[ch] > 0:
                missing -= 1
            need[ch] -= 1
            if missing == 0:
                while left < right and need[s[left]] < 0:
                    need[s[left]] += 1
                    left += 1
                if end == 0 or right - left < end - start:
                    start, end = left, right
                need[s[left]] += 1
                missing += 1
                left += 1
        return s[start:end]`,
  "maximum-subarray": `class Solution:
    def maxSubArray(self, nums):
        best = cur = nums[0]
        for x in nums[1:]:
            cur = max(x, cur + x)
            best = max(best, cur)
        return best`,
  "merge-intervals": `class Solution:
    def merge(self, intervals):
        intervals.sort()
        ans = []
        for s, e in intervals:
            if not ans or s > ans[-1][1]:
                ans.append([s, e])
            else:
                ans[-1][1] = max(ans[-1][1], e)
        return ans`,
  "rotate-array": `class Solution:
    def rotate(self, nums, k):
        n = len(nums)
        k %= n
        nums[:] = nums[-k:] + nums[:-k]`,
  "product-of-array-except-self": `class Solution:
    def productExceptSelf(self, nums):
        ans = [1] * len(nums)
        prefix = 1
        for i, x in enumerate(nums):
            ans[i] = prefix
            prefix *= x
        suffix = 1
        for i in range(len(nums) - 1, -1, -1):
            ans[i] *= suffix
            suffix *= nums[i]
        return ans`,
  "first-missing-positive": `class Solution:
    def firstMissingPositive(self, nums):
        n = len(nums)
        for i in range(n):
            while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
                j = nums[i] - 1
                nums[i], nums[j] = nums[j], nums[i]
        for i, x in enumerate(nums):
            if x != i + 1:
                return i + 1
        return n + 1`,
  "set-matrix-zeroes": `class Solution:
    def setZeroes(self, matrix):
        m, n = len(matrix), len(matrix[0])
        row0 = any(matrix[0][j] == 0 for j in range(n))
        col0 = any(matrix[i][0] == 0 for i in range(m))
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][j] == 0:
                    matrix[i][0] = matrix[0][j] = 0
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0
        if row0:
            for j in range(n): matrix[0][j] = 0
        if col0:
            for i in range(m): matrix[i][0] = 0`,
  "spiral-matrix": `class Solution:
    def spiralOrder(self, matrix):
        ans = []
        top, bottom = 0, len(matrix) - 1
        left, right = 0, len(matrix[0]) - 1
        while top <= bottom and left <= right:
            for j in range(left, right + 1): ans.append(matrix[top][j])
            top += 1
            for i in range(top, bottom + 1): ans.append(matrix[i][right])
            right -= 1
            if top <= bottom:
                for j in range(right, left - 1, -1): ans.append(matrix[bottom][j])
                bottom -= 1
            if left <= right:
                for i in range(bottom, top - 1, -1): ans.append(matrix[i][left])
                left += 1
        return ans`,
  "rotate-image": `class Solution:
    def rotate(self, matrix):
        n = len(matrix)
        for i in range(n):
            for j in range(i + 1, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        for row in matrix:
            row.reverse()`,
  "search-a-2d-matrix-ii": `class Solution:
    def searchMatrix(self, matrix, target):
        i, j = 0, len(matrix[0]) - 1
        while i < len(matrix) and j >= 0:
            if matrix[i][j] == target:
                return True
            if matrix[i][j] > target:
                j -= 1
            else:
                i += 1
        return False`,
  "intersection-of-two-linked-lists": `class Solution:
    def getIntersectionNode(self, headA, headB):
        a, b = headA, headB
        while a is not b:
            a = a.next if a else headB
            b = b.next if b else headA
        return a`,
  "reverse-linked-list": `class Solution:
    def reverseList(self, head):
        prev = None
        while head:
            nxt = head.next
            head.next = prev
            prev = head
            head = nxt
        return prev`,
  "palindrome-linked-list": `class Solution:
    def isPalindrome(self, head):
        vals = []
        while head:
            vals.append(head.val)
            head = head.next
        return vals == vals[::-1]`,
  "linked-list-cycle": `class Solution:
    def hasCycle(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow is fast:
                return True
        return False`,
  "linked-list-cycle-ii": `class Solution:
    def detectCycle(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow is fast:
                cur = head
                while cur is not slow:
                    cur = cur.next
                    slow = slow.next
                return cur
        return None`,
  "merge-two-sorted-lists": `class Solution:
    def mergeTwoLists(self, list1, list2):
        dummy = cur = ListNode()
        while list1 and list2:
            if list1.val <= list2.val:
                cur.next, list1 = list1, list1.next
            else:
                cur.next, list2 = list2, list2.next
            cur = cur.next
        cur.next = list1 or list2
        return dummy.next`,
  "add-two-numbers": `class Solution:
    def addTwoNumbers(self, l1, l2):
        dummy = cur = ListNode()
        carry = 0
        while l1 or l2 or carry:
            s = carry
            if l1: s, l1 = s + l1.val, l1.next
            if l2: s, l2 = s + l2.val, l2.next
            carry, digit = divmod(s, 10)
            cur.next = ListNode(digit)
            cur = cur.next
        return dummy.next`,
  "remove-nth-node-from-end-of-list": `class Solution:
    def removeNthFromEnd(self, head, n):
        dummy = ListNode(0, head)
        fast = slow = dummy
        for _ in range(n):
            fast = fast.next
        while fast.next:
            fast = fast.next
            slow = slow.next
        slow.next = slow.next.next
        return dummy.next`,
  "swap-nodes-in-pairs": `class Solution:
    def swapPairs(self, head):
        dummy = ListNode(0, head)
        prev = dummy
        while prev.next and prev.next.next:
            a, b = prev.next, prev.next.next
            prev.next, a.next, b.next = b, b.next, a
            prev = a
        return dummy.next`,
  "reverse-nodes-in-k-group": `class Solution:
    def reverseKGroup(self, head, k):
        dummy = ListNode(0, head)
        group_prev = dummy
        while True:
            kth = group_prev
            for _ in range(k):
                kth = kth.next
                if not kth:
                    return dummy.next
            group_next = kth.next
            prev, cur = group_next, group_prev.next
            while cur is not group_next:
                nxt = cur.next
                cur.next = prev
                prev = cur
                cur = nxt
            tmp = group_prev.next
            group_prev.next = kth
            group_prev = tmp`,
  "copy-list-with-random-pointer": `class Solution:
    def copyRandomList(self, head):
        old_to_new = {None: None}
        cur = head
        while cur:
            old_to_new[cur] = Node(cur.val)
            cur = cur.next
        cur = head
        while cur:
            old_to_new[cur].next = old_to_new[cur.next]
            old_to_new[cur].random = old_to_new[cur.random]
            cur = cur.next
        return old_to_new[head]`,
  "sort-list": `class Solution:
    def sortList(self, head):
        if not head or not head.next:
            return head
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        mid = slow.next
        slow.next = None
        return self.merge(self.sortList(head), self.sortList(mid))

    def merge(self, a, b):
        dummy = cur = ListNode()
        while a and b:
            if a.val <= b.val:
                cur.next, a = a, a.next
            else:
                cur.next, b = b, b.next
            cur = cur.next
        cur.next = a or b
        return dummy.next`,
  "merge-k-sorted-lists": `import heapq

class Solution:
    def mergeKLists(self, lists):
        heap = []
        for i, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, i, node))
        dummy = cur = ListNode()
        while heap:
            _, i, node = heapq.heappop(heap)
            cur.next = node
            cur = cur.next
            if node.next:
                heapq.heappush(heap, (node.next.val, i, node.next))
        return dummy.next`,
  "lru-cache": `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.data = OrderedDict()

    def get(self, key):
        if key not in self.data:
            return -1
        self.data.move_to_end(key)
        return self.data[key]

    def put(self, key, value):
        if key in self.data:
            self.data.move_to_end(key)
        self.data[key] = value
        if len(self.data) > self.capacity:
            self.data.popitem(last=False)`,
  "binary-tree-inorder-traversal": `class Solution:
    def inorderTraversal(self, root):
        ans, stack = [], []
        while root or stack:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            ans.append(root.val)
            root = root.right
        return ans`,
  "maximum-depth-of-binary-tree": `class Solution:
    def maxDepth(self, root):
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))`,
  "invert-binary-tree": `class Solution:
    def invertTree(self, root):
        if root:
            root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root`,
  "symmetric-tree": `class Solution:
    def isSymmetric(self, root):
        def same(a, b):
            if not a or not b:
                return a is b
            return a.val == b.val and same(a.left, b.right) and same(a.right, b.left)
        return same(root.left, root.right) if root else True`,
  "diameter-of-binary-tree": `class Solution:
    def diameterOfBinaryTree(self, root):
        self.ans = 0
        def depth(node):
            if not node:
                return 0
            l, r = depth(node.left), depth(node.right)
            self.ans = max(self.ans, l + r)
            return 1 + max(l, r)
        depth(root)
        return self.ans`,
  "binary-tree-level-order-traversal": `from collections import deque

class Solution:
    def levelOrder(self, root):
        if not root:
            return []
        q, ans = deque([root]), []
        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                level.append(node.val)
                if node.left: q.append(node.left)
                if node.right: q.append(node.right)
            ans.append(level)
        return ans`,
  "convert-sorted-array-to-binary-search-tree": `class Solution:
    def sortedArrayToBST(self, nums):
        if not nums:
            return None
        mid = len(nums) // 2
        root = TreeNode(nums[mid])
        root.left = self.sortedArrayToBST(nums[:mid])
        root.right = self.sortedArrayToBST(nums[mid + 1:])
        return root`,
  "validate-binary-search-tree": `class Solution:
    def isValidBST(self, root):
        def check(node, low, high):
            if not node:
                return True
            return low < node.val < high and check(node.left, low, node.val) and check(node.right, node.val, high)
        return check(root, float("-inf"), float("inf"))`,
  "kth-smallest-element-in-a-bst": `class Solution:
    def kthSmallest(self, root, k):
        stack = []
        while root or stack:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            k -= 1
            if k == 0:
                return root.val
            root = root.right`,
  "binary-tree-right-side-view": `from collections import deque

class Solution:
    def rightSideView(self, root):
        if not root:
            return []
        q, ans = deque([root]), []
        while q:
            for i in range(len(q)):
                node = q.popleft()
                if i == 0:
                    ans.append(node.val)
                if node.right: q.append(node.right)
                if node.left: q.append(node.left)
        return ans`,
  "flatten-binary-tree-to-linked-list": `class Solution:
    def flatten(self, root):
        prev = None
        def dfs(node):
            nonlocal prev
            if not node:
                return
            dfs(node.right)
            dfs(node.left)
            node.right = prev
            node.left = None
            prev = node
        dfs(root)`,
  "construct-binary-tree-from-preorder-and-inorder-traversal": `class Solution:
    def buildTree(self, preorder, inorder):
        pos = {v: i for i, v in enumerate(inorder)}
        def build(pl, pr, il, ir):
            if pl > pr:
                return None
            root_val = preorder[pl]
            k = pos[root_val]
            left_size = k - il
            root = TreeNode(root_val)
            root.left = build(pl + 1, pl + left_size, il, k - 1)
            root.right = build(pl + left_size + 1, pr, k + 1, ir)
            return root
        return build(0, len(preorder) - 1, 0, len(inorder) - 1)`,
  "path-sum-iii": `from collections import defaultdict

class Solution:
    def pathSum(self, root, targetSum):
        count = defaultdict(int)
        count[0] = 1
        def dfs(node, prefix):
            if not node:
                return 0
            prefix += node.val
            ans = count[prefix - targetSum]
            count[prefix] += 1
            ans += dfs(node.left, prefix) + dfs(node.right, prefix)
            count[prefix] -= 1
            return ans
        return dfs(root, 0)`,
  "lowest-common-ancestor-of-a-binary-tree": `class Solution:
    def lowestCommonAncestor(self, root, p, q):
        if not root or root is p or root is q:
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        return root if left and right else left or right`,
  "binary-tree-maximum-path-sum": `class Solution:
    def maxPathSum(self, root):
        self.ans = float("-inf")
        def gain(node):
            if not node:
                return 0
            left = max(gain(node.left), 0)
            right = max(gain(node.right), 0)
            self.ans = max(self.ans, node.val + left + right)
            return node.val + max(left, right)
        gain(root)
        return self.ans`,
  "number-of-islands": `class Solution:
    def numIslands(self, grid):
        m, n = len(grid), len(grid[0])
        def dfs(i, j):
            if i < 0 or i == m or j < 0 or j == n or grid[i][j] != "1":
                return
            grid[i][j] = "0"
            dfs(i + 1, j); dfs(i - 1, j); dfs(i, j + 1); dfs(i, j - 1)
        ans = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == "1":
                    ans += 1
                    dfs(i, j)
        return ans`,
  "rotting-oranges": `from collections import deque

class Solution:
    def orangesRotting(self, grid):
        m, n = len(grid), len(grid[0])
        q, fresh = deque(), 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2: q.append((i, j, 0))
                if grid[i][j] == 1: fresh += 1
        minutes = 0
        for i, j, minutes in q:
            for di, dj in ((1,0),(-1,0),(0,1),(0,-1)):
                x, y = i + di, j + dj
                if 0 <= x < m and 0 <= y < n and grid[x][y] == 1:
                    grid[x][y] = 2
                    fresh -= 1
                    q.append((x, y, minutes + 1))
        return minutes if fresh == 0 else -1`,
  "course-schedule": `from collections import deque

class Solution:
    def canFinish(self, numCourses, prerequisites):
        graph = [[] for _ in range(numCourses)]
        indeg = [0] * numCourses
        for a, b in prerequisites:
            graph[b].append(a)
            indeg[a] += 1
        q = deque(i for i, d in enumerate(indeg) if d == 0)
        seen = 0
        while q:
            u = q.popleft()
            seen += 1
            for v in graph[u]:
                indeg[v] -= 1
                if indeg[v] == 0:
                    q.append(v)
        return seen == numCourses`,
  "implement-trie-prefix-tree": `class Trie:
    def __init__(self):
        self.children = {}
        self.end = False

    def insert(self, word):
        node = self
        for ch in word:
            node = node.children.setdefault(ch, Trie())
        node.end = True

    def search(self, word):
        node = self._find(word)
        return bool(node and node.end)

    def startsWith(self, prefix):
        return self._find(prefix) is not None

    def _find(self, s):
        node = self
        for ch in s:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node`,
  "permutations": `class Solution:
    def permute(self, nums):
        ans, path, used = [], [], [False] * len(nums)
        def dfs():
            if len(path) == len(nums):
                ans.append(path[:])
                return
            for i, x in enumerate(nums):
                if not used[i]:
                    used[i] = True
                    path.append(x)
                    dfs()
                    path.pop()
                    used[i] = False
        dfs()
        return ans`,
  "subsets": `class Solution:
    def subsets(self, nums):
        ans, path = [], []
        def dfs(i):
            if i == len(nums):
                ans.append(path[:])
                return
            dfs(i + 1)
            path.append(nums[i])
            dfs(i + 1)
            path.pop()
        dfs(0)
        return ans`,
  "letter-combinations-of-a-phone-number": `class Solution:
    def letterCombinations(self, digits):
        if not digits:
            return []
        mp = {"2":"abc","3":"def","4":"ghi","5":"jkl","6":"mno","7":"pqrs","8":"tuv","9":"wxyz"}
        ans, path = [], []
        def dfs(i):
            if i == len(digits):
                ans.append("".join(path))
                return
            for ch in mp[digits[i]]:
                path.append(ch)
                dfs(i + 1)
                path.pop()
        dfs(0)
        return ans`,
  "combination-sum": `class Solution:
    def combinationSum(self, candidates, target):
        candidates.sort()
        ans, path = [], []
        def dfs(start, remain):
            if remain == 0:
                ans.append(path[:])
                return
            for i in range(start, len(candidates)):
                if candidates[i] > remain:
                    break
                path.append(candidates[i])
                dfs(i, remain - candidates[i])
                path.pop()
        dfs(0, target)
        return ans`,
  "generate-parentheses": `class Solution:
    def generateParenthesis(self, n):
        ans = []
        def dfs(s, left, right):
            if len(s) == 2 * n:
                ans.append(s)
                return
            if left < n:
                dfs(s + "(", left + 1, right)
            if right < left:
                dfs(s + ")", left, right + 1)
        dfs("", 0, 0)
        return ans`,
  "word-search": `class Solution:
    def exist(self, board, word):
        m, n = len(board), len(board[0])
        def dfs(i, j, k):
            if k == len(word):
                return True
            if i < 0 or i == m or j < 0 or j == n or board[i][j] != word[k]:
                return False
            tmp, board[i][j] = board[i][j], "#"
            ok = dfs(i+1,j,k+1) or dfs(i-1,j,k+1) or dfs(i,j+1,k+1) or dfs(i,j-1,k+1)
            board[i][j] = tmp
            return ok
        return any(dfs(i, j, 0) for i in range(m) for j in range(n))`,
  "palindrome-partitioning": `class Solution:
    def partition(self, s):
        ans, path = [], []
        def is_pal(x):
            return x == x[::-1]
        def dfs(start):
            if start == len(s):
                ans.append(path[:])
                return
            for end in range(start + 1, len(s) + 1):
                part = s[start:end]
                if is_pal(part):
                    path.append(part)
                    dfs(end)
                    path.pop()
        dfs(0)
        return ans`,
  "n-queens": `class Solution:
    def solveNQueens(self, n):
        ans, cols, diag1, diag2, board = [], set(), set(), set(), []
        def dfs(r):
            if r == n:
                ans.append(["." * c + "Q" + "." * (n - c - 1) for c in board])
                return
            for c in range(n):
                if c in cols or r - c in diag1 or r + c in diag2:
                    continue
                cols.add(c); diag1.add(r - c); diag2.add(r + c); board.append(c)
                dfs(r + 1)
                board.pop(); cols.remove(c); diag1.remove(r - c); diag2.remove(r + c)
        dfs(0)
        return ans`,
  "search-insert-position": `class Solution:
    def searchInsert(self, nums, target):
        l, r = 0, len(nums)
        while l < r:
            mid = (l + r) // 2
            if nums[mid] < target:
                l = mid + 1
            else:
                r = mid
        return l`,
  "search-a-2d-matrix": `class Solution:
    def searchMatrix(self, matrix, target):
        m, n = len(matrix), len(matrix[0])
        l, r = 0, m * n - 1
        while l <= r:
            mid = (l + r) // 2
            x = matrix[mid // n][mid % n]
            if x == target:
                return True
            if x < target:
                l = mid + 1
            else:
                r = mid - 1
        return False`,
  "find-first-and-last-position-of-element-in-sorted-array": `from bisect import bisect_left, bisect_right

class Solution:
    def searchRange(self, nums, target):
        l = bisect_left(nums, target)
        r = bisect_right(nums, target) - 1
        if l <= r:
            return [l, r]
        return [-1, -1]`,
  "search-in-rotated-sorted-array": `class Solution:
    def search(self, nums, target):
        l, r = 0, len(nums) - 1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                return mid
            if nums[l] <= nums[mid]:
                if nums[l] <= target < nums[mid]:
                    r = mid - 1
                else:
                    l = mid + 1
            else:
                if nums[mid] < target <= nums[r]:
                    l = mid + 1
                else:
                    r = mid - 1
        return -1`,
  "find-minimum-in-rotated-sorted-array": `class Solution:
    def findMin(self, nums):
        l, r = 0, len(nums) - 1
        while l < r:
            mid = (l + r) // 2
            if nums[mid] > nums[r]:
                l = mid + 1
            else:
                r = mid
        return nums[l]`,
  "median-of-two-sorted-arrays": `class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        m, n = len(nums1), len(nums2)
        l, r = 0, m
        half = (m + n + 1) // 2
        while l <= r:
            i = (l + r) // 2
            j = half - i
            aL = nums1[i - 1] if i else float("-inf")
            aR = nums1[i] if i < m else float("inf")
            bL = nums2[j - 1] if j else float("-inf")
            bR = nums2[j] if j < n else float("inf")
            if aL <= bR and bL <= aR:
                if (m + n) % 2:
                    return max(aL, bL)
                return (max(aL, bL) + min(aR, bR)) / 2
            if aL > bR:
                r = i - 1
            else:
                l = i + 1`,
  "valid-parentheses": `class Solution:
    def isValid(self, s):
        stack, pairs = [], {")":"(", "]":"[", "}":"{"}
        for ch in s:
            if ch in pairs.values():
                stack.append(ch)
            elif not stack or stack.pop() != pairs[ch]:
                return False
        return not stack`,
  "min-stack": `class MinStack:
    def __init__(self):
        self.stack = []
        self.mins = []

    def push(self, val):
        self.stack.append(val)
        self.mins.append(val if not self.mins else min(val, self.mins[-1]))

    def pop(self):
        self.stack.pop()
        self.mins.pop()

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.mins[-1]`,
  "decode-string": `class Solution:
    def decodeString(self, s):
        stack, cur, num = [], "", 0
        for ch in s:
            if ch.isdigit():
                num = num * 10 + int(ch)
            elif ch == "[":
                stack.append((cur, num))
                cur, num = "", 0
            elif ch == "]":
                prev, k = stack.pop()
                cur = prev + cur * k
            else:
                cur += ch
        return cur`,
  "daily-temperatures": `class Solution:
    def dailyTemperatures(self, temperatures):
        ans = [0] * len(temperatures)
        stack = []
        for i, t in enumerate(temperatures):
            while stack and temperatures[stack[-1]] < t:
                j = stack.pop()
                ans[j] = i - j
            stack.append(i)
        return ans`,
  "largest-rectangle-in-histogram": `class Solution:
    def largestRectangleArea(self, heights):
        stack, ans = [], 0
        heights.append(0)
        for i, h in enumerate(heights):
            while stack and heights[stack[-1]] > h:
                height = heights[stack.pop()]
                left = stack[-1] if stack else -1
                ans = max(ans, height * (i - left - 1))
            stack.append(i)
        heights.pop()
        return ans`,
  "kth-largest-element-in-an-array": `import heapq

class Solution:
    def findKthLargest(self, nums, k):
        return heapq.nlargest(k, nums)[-1]`,
  "top-k-frequent-elements": `from collections import Counter

class Solution:
    def topKFrequent(self, nums, k):
        return [x for x, _ in Counter(nums).most_common(k)]`,
  "find-median-from-data-stream": `import heapq

class MedianFinder:
    def __init__(self):
        self.small = []
        self.large = []

    def addNum(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`,
  "best-time-to-buy-and-sell-stock": `class Solution:
    def maxProfit(self, prices):
        low, ans = float("inf"), 0
        for p in prices:
            low = min(low, p)
            ans = max(ans, p - low)
        return ans`,
  "jump-game": `class Solution:
    def canJump(self, nums):
        far = 0
        for i, step in enumerate(nums):
            if i > far:
                return False
            far = max(far, i + step)
        return True`,
  "jump-game-ii": `class Solution:
    def jump(self, nums):
        jumps = end = far = 0
        for i in range(len(nums) - 1):
            far = max(far, i + nums[i])
            if i == end:
                jumps += 1
                end = far
        return jumps`,
  "partition-labels": `class Solution:
    def partitionLabels(self, s):
        last = {ch: i for i, ch in enumerate(s)}
        ans, start, end = [], 0, 0
        for i, ch in enumerate(s):
            end = max(end, last[ch])
            if i == end:
                ans.append(end - start + 1)
                start = i + 1
        return ans`,
  "climbing-stairs": `class Solution:
    def climbStairs(self, n):
        a, b = 1, 1
        for _ in range(n):
            a, b = b, a + b
        return a`,
  "pascals-triangle": `class Solution:
    def generate(self, numRows):
        ans = []
        for i in range(numRows):
            row = [1] * (i + 1)
            for j in range(1, i):
                row[j] = ans[-1][j - 1] + ans[-1][j]
            ans.append(row)
        return ans`,
  "house-robber": `class Solution:
    def rob(self, nums):
        take = skip = 0
        for x in nums:
            take, skip = skip + x, max(skip, take)
        return max(take, skip)`,
  "perfect-squares": `class Solution:
    def numSquares(self, n):
        dp = [0] + [float("inf")] * n
        squares = [i * i for i in range(1, int(n ** 0.5) + 1)]
        for i in range(1, n + 1):
            dp[i] = min(dp[i - s] + 1 for s in squares if s <= i)
        return dp[n]`,
  "coin-change": `class Solution:
    def coinChange(self, coins, amount):
        dp = [0] + [amount + 1] * amount
        for coin in coins:
            for x in range(coin, amount + 1):
                dp[x] = min(dp[x], dp[x - coin] + 1)
        return dp[amount] if dp[amount] <= amount else -1`,
  "word-break": `class Solution:
    def wordBreak(self, s, wordDict):
        words = set(wordDict)
        dp = [False] * (len(s) + 1)
        dp[0] = True
        for i in range(1, len(s) + 1):
            for j in range(i):
                if dp[j] and s[j:i] in words:
                    dp[i] = True
                    break
        return dp[-1]`,
  "longest-increasing-subsequence": `from bisect import bisect_left

class Solution:
    def lengthOfLIS(self, nums):
        tails = []
        for x in nums:
            i = bisect_left(tails, x)
            if i == len(tails):
                tails.append(x)
            else:
                tails[i] = x
        return len(tails)`,
  "maximum-product-subarray": `class Solution:
    def maxProduct(self, nums):
        hi = lo = ans = nums[0]
        for x in nums[1:]:
            if x < 0:
                hi, lo = lo, hi
            hi = max(x, hi * x)
            lo = min(x, lo * x)
            ans = max(ans, hi)
        return ans`,
  "partition-equal-subset-sum": `class Solution:
    def canPartition(self, nums):
        s = sum(nums)
        if s % 2:
            return False
        target = s // 2
        dp = {0}
        for x in nums:
            dp |= {v + x for v in dp if v + x <= target}
            if target in dp:
                return True
        return False`,
  "longest-valid-parentheses": `class Solution:
    def longestValidParentheses(self, s):
        stack, ans = [-1], 0
        for i, ch in enumerate(s):
            if ch == "(":
                stack.append(i)
            else:
                stack.pop()
                if stack:
                    ans = max(ans, i - stack[-1])
                else:
                    stack.append(i)
        return ans`,
  "unique-paths": `class Solution:
    def uniquePaths(self, m, n):
        dp = [1] * n
        for _ in range(1, m):
            for j in range(1, n):
                dp[j] += dp[j - 1]
        return dp[-1]`,
  "minimum-path-sum": `class Solution:
    def minPathSum(self, grid):
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0:
                    continue
                up = grid[i - 1][j] if i else float("inf")
                left = grid[i][j - 1] if j else float("inf")
                grid[i][j] += min(up, left)
        return grid[-1][-1]`,
  "longest-palindromic-substring": `class Solution:
    def longestPalindrome(self, s):
        ans = ""
        def expand(l, r):
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
            return s[l + 1:r]
        for i in range(len(s)):
            ans = max(ans, expand(i, i), expand(i, i + 1), key=len)
        return ans`,
  "longest-common-subsequence": `class Solution:
    def longestCommonSubsequence(self, text1, text2):
        m, n = len(text1), len(text2)
        dp = [0] * (n + 1)
        for i in range(1, m + 1):
            prev = 0
            for j in range(1, n + 1):
                cur = dp[j]
                if text1[i - 1] == text2[j - 1]:
                    dp[j] = prev + 1
                else:
                    dp[j] = max(dp[j], dp[j - 1])
                prev = cur
        return dp[n]`,
  "edit-distance": `class Solution:
    def minDistance(self, word1, word2):
        m, n = len(word1), len(word2)
        dp = list(range(n + 1))
        for i in range(1, m + 1):
            prev, dp[0] = dp[0], i
            for j in range(1, n + 1):
                cur = dp[j]
                if word1[i - 1] == word2[j - 1]:
                    dp[j] = prev
                else:
                    dp[j] = 1 + min(prev, dp[j], dp[j - 1])
                prev = cur
        return dp[n]`,
  "single-number": `class Solution:
    def singleNumber(self, nums):
        ans = 0
        for x in nums:
            ans ^= x
        return ans`,
  "majority-element": `class Solution:
    def majorityElement(self, nums):
        cand = count = 0
        for x in nums:
            if count == 0:
                cand = x
            count += 1 if x == cand else -1
        return cand`,
  "sort-colors": `class Solution:
    def sortColors(self, nums):
        l, i, r = 0, 0, len(nums) - 1
        while i <= r:
            if nums[i] == 0:
                nums[l], nums[i] = nums[i], nums[l]
                l += 1
                i += 1
            elif nums[i] == 2:
                nums[r], nums[i] = nums[i], nums[r]
                r -= 1
            else:
                i += 1`,
  "next-permutation": `class Solution:
    def nextPermutation(self, nums):
        i = len(nums) - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        if i >= 0:
            j = len(nums) - 1
            while nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        nums[i + 1:] = reversed(nums[i + 1:])`,
  "find-the-duplicate-number": `class Solution:
    def findDuplicate(self, nums):
        slow = fast = nums[0]
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break
        slow = nums[0]
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]
        return slow`,
};

export const complexityByGroup = {
  "哈希": ["通常 O(n)", "通常 O(n)"],
  "双指针": ["通常 O(n) 或 O(n^2)", "通常 O(1)"],
  "滑动窗口": ["通常 O(n)", "通常 O(字符集或窗口大小)"],
  "子串": ["通常 O(n)", "通常 O(n)"],
  "普通数组": ["通常 O(n) 到 O(n log n)", "视题目而定"],
  "矩阵": ["通常 O(mn)", "通常 O(1) 或 O(mn)"],
  "链表": ["通常 O(n)", "通常 O(1) 或递归栈"],
  "二叉树": ["通常 O(n)", "通常 O(h)"],
  "图论": ["通常 O(V + E)", "通常 O(V + E)"],
  "回溯": ["指数级", "递归栈 + 结果集"],
  "二分查找": ["通常 O(log n)", "通常 O(1)"],
  "栈": ["通常 O(n)", "通常 O(n)"],
  "堆": ["通常 O(n log k)", "通常 O(k)"],
  "贪心算法": ["通常 O(n)", "通常 O(1)"],
  "动态规划": ["通常 O(n) 到 O(nW)", "通常 O(n)"],
  "多维动态规划": ["通常 O(mn)", "通常 O(n) 或 O(mn)"],
  "技巧": ["通常 O(n)", "通常 O(1)"],
};

export function makeSolution(problem) {
  const code = codeBySlug[problem.titleSlug] || `class Solution:
    def ${problem.titleSlug.replace(/-/g, "_")}(self, *args):
        # TODO: 补充本题代码
        pass`;
  const [time, space] = complexityByGroup[problem.group] || ["视题目而定", "视题目而定"];
  return {
    steps: [
      `识别本题属于「${problem.group}」专题，先抓住状态、指针或数据结构的含义。`,
      "按输入规模选择合适复杂度，避免暴力枚举造成超时。",
      "代码中保留关键变量名，方便在面试中边写边解释。",
    ],
    code,
    complexity: { time, space },
  };
}
