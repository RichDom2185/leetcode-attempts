class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        pairs = sorted(enumerate(nums), key=lambda p: p[1])
        start = 0
        end = len(nums) - 1
        while pairs[start][1] + pairs[end][1] != target:
            while pairs[start][1] + pairs[end][1] > target:
                end -= 1
            while pairs[start][1] + pairs[end][1] < target:
                start += 1
        return [pairs[start][0], pairs[end][0]]
