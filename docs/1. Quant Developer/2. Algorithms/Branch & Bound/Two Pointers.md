# Two Pointers


[https://techiedelight.quora.com/500-Data-Structures-and-Algorithms-practice-problems-and-their-solutions 500 Data Structures and Algorithms practice problems and their solutions]

黄绿蓝

[https://en.wikipedia.org/wiki/List_of_data_structures list of DS]

  
[https://www.youtube.com/channel/UCcdCkJKXlRoXVD03eo-q8mQ Coding Interview Problems]


[https://www.topcoder.com/]

[http://www.geeksforgeeks.org/]

[https://www.interviewbit.com/]

[http://ravindrababuravula.com/]

[http://freevideolectures.com/]

- Algorithm Tricks: Reservoir Sampling

[http://visualgo.net]
[https://www.cs.usfca.edu/~galles/visualization/Algorithms.html]


- Algorithms
  -- Sorting: bubble sort, heap sort, merge sort



  = Two Pointers

基础知识：常见双指针算法分为三类，同向（即两个指针都相同一个方向移动），背向（两个指针从相同或者相邻的位置出发，背向移动直到其中一根指针到达边界为止），相向（两个指针从两边出发一起向中间移动直到两个指针相遇）

== 背向双指针：(基本上全是回文串的题)
- Leetcode 409. Longest Palindrome
- Leetcode 125. Valid Palindrome
- Leetcode 5. Longest Palindromic Substring

== 相向双指针：(以two sum为基础的一系列题)
- Leetcode 1. Two Sum (这里使用的是先排序的双指针算法，不同于hashmap做法)
- Leetcode 167. Two Sum II - Input array is sorted
- Leetcode 15. 3Sum
- Leetcode 16. 3Sum Closest
- Leetcode 18. 4Sum
- Leetcode 454. 4Sum II
- Leetcode 277. Find the Celebrity

== 同向双指针：（个人觉得最难的一类题）
- Leetcode 283. Move Zeroes
- Leetcode 26. Remove Duplicate Numbers in Array
- Leetcode 395. Longest Substring with At Least K Repeating Characters
- Leetcode 340. Longest Substring with At Most K Distinct Characters
- Leetcode 76. Minimum Window Substring
- Leetcode 3. Longest Substring Without Repeating Characters



题目分类	题目编号
头尾指针	345、680、167、15、16、18、11、42
同向双指针、滑动窗口	27、26、80、83、82、611、187、643、674、209、3、438、567、424、76、30
分段双指针	86、328、160、88、475
快慢指针	141、142、143、234、457、287