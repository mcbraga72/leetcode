class Solution {
    public boolean isPalindrome(int x) {
        int[] number = String.valueOf(x)
		    .chars()
		    .toArray();

        for (int i = 0; i < number.length; i++) {
            if (number[i] != number[number.length - i - 1]) {
                return false;
            }
        }

        return true;
    }
}